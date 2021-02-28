import { getDeviceId } from './api';

describe('get device id', () => {
  it('should extract correct device ID', () => {
    expect(
      getDeviceId({
        address: '10.24.1.128',
        fqdn: 'eWeLink_1000c22fc4._ewelink._tcp.local',
        modelName: null,
        familyName: null,
        service: { port: 8081, protocol: 'tcp', type: 'ewelink' },
      }),
    ).toEqual('eWeLink_1000c22fc4');
  });
});
