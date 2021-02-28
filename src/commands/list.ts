import { Command } from '@oclif/command';
import mdns from 'node-dns-sd';
import { cli } from 'cli-ux';
import { getDeviceId } from '../api';

export default class List extends Command {
  static description = 'describe the command here';

  static flags = { ...cli.table.flags() };

  // eslint-disable-next-line class-methods-use-this
  async run() {
    const { flags } = this.parse(List);
    const devices = await mdns.discover({ name: '_ewelink._tcp.local' });

    cli.table(
      devices,
      {
        deviceId: {
          header: 'Device ID',
          get: (device) => getDeviceId(device),
        },
        address: {},
        port: { get: (device) => device.service.port },
        fqdn: { header: 'FQDN' },
      },
      flags,
    );
  }
}
