import { Command } from '@oclif/command';
import mdns from 'node-dns-sd';
import { cli } from 'cli-ux';
import { prompt } from 'inquirer';
import { getDeviceId, getInfo } from '../api';

export default class Identify extends Command {
  static description = 'describe the command here';

  async run() {
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

    const info = await getInfo(sonoff);

    this.log(JSON.stringify(info, null, 4));
  }
}
