import { Command, flags } from '@oclif/command';
import mdns from 'node-dns-sd';
import { prompt } from 'inquirer';
import { cli } from 'cli-ux';
import { readFileSync } from 'fs';
import { createHash } from 'crypto';
import chalk from 'chalk';
import { hostFile } from '../fileHost';
import { getDeviceId, unlockOTA, otaFlash, DeviceInfo, getInfo } from '../api';

export type FlashFlags = {
  file: string;
  ip: string | undefined;
  port: string | undefined;
};

export async function chooseDevice(flags: FlashFlags): Promise<DeviceInfo> {
  if (flags.ip) {
    const deviceInfo = {
      address: flags.ip,
      port: Number(flags.port || 8081),
    };

    // Doing this to ensure its a valid sonoff
    await getInfo(deviceInfo);
    return deviceInfo;
  }

  cli.action.start('Scanning for devices');
  const devices = await mdns.discover({ name: '_ewelink._tcp.local' });
  cli.action.stop();

  const { sonoff }: { sonoff: Device } = await prompt([
    {
      name: 'sonoff',
      message: 'Choose a device',
      type: 'list',
      choices: devices.map((device) => {
        return {
          name: `${getDeviceId(device)} - ${device.address}`,
          value: device,
        };
      }),
    },
  ]);

  return {
    address: sonoff.address,
    port: sonoff.service.port,
  };
}

export default class Flash extends Command {
  static description = 'describe the command here';

  static flags = {
    file: flags.string({ required: true }),
    ip: flags.string(),
    port: flags.string({ dependsOn: ['ip'] }),
  };

  async run() {
    const { flags }: { flags: FlashFlags } = this.parse(Flash);

    const sonoff = await chooseDevice(flags);

    cli.action.start('Generating file checksum');

    const fileBuffer = readFileSync(flags.file);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    cli.action.stop();

    await unlockOTA(sonoff);

    cli.wait(250);

    const fileUrl = await hostFile(flags.file, sonoff.address);

    cli.wait(250);

    await otaFlash(sonoff, fileUrl, hex);

    this.log(chalk.green('Successfully initiated flashing'));

    cli.action.start(chalk.green('Waiting for device to download firmware'));
  }
}
