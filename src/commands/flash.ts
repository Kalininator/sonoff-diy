import { Command, flags } from '@oclif/command';
import mdns from 'node-dns-sd';
import { prompt } from 'inquirer';
import { cli } from 'cli-ux';
import { readFileSync } from 'fs';
import { createHash } from 'crypto';
import chalk from 'chalk';
import { hostFile } from '../fileHost';
import { getDeviceId, unlockOTA, otaFlash } from '../api';

export default class Flash extends Command {
  static description = 'describe the command here';

  static flags = {
    file: flags.string({ required: true }),
  };

  async run() {
    const { flags } = this.parse(Flash);

    cli.action.start('Scanning for devices');
    const devices = await mdns.discover({ name: '_ewelink._tcp.local' });
    cli.action.stop();

    const { sonoff } = await prompt([
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

    // const info = await getInfo(sonoff);

    // this.log(JSON.stringify(info, null, 4));

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
  }
}
