import axios from 'axios';

type SonoffInfo = {
  switch: string;
  startup: string;
  pulse: string;
  pulseWidth: number;
  ssid: string;
  otaUnlock: boolean;
};

export function getDeviceId(device: Device): string {
  return device.fqdn.split('.')[0].replace('eWeLink_', '');
}

export async function getInfo(device: Device) {
  const res = await axios.post(
    `http://${device.address}:${device.service.port}/zeroconf/info`,
    {
      deviceId: getDeviceId(device),
      data: {},
    },
  );
  return JSON.parse(res.data.data) as SonoffInfo;
}
