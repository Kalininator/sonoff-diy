import axios from 'axios';
import { cli } from 'cli-ux';

type SonoffInfo = {
  switch: string;
  startup: string;
  pulse: string;
  pulseWidth: number;
  ssid: string;
  otaUnlock: boolean;
};

function getBaseURL(device: Device) {
  return `http://${device.address}:${device.service.port}/zeroconf`;
}

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

export async function unlockOTA(device: Device) {
  cli.action.start('Unlocking OTA');
  await axios.post(`${getBaseURL(device)}/ota_unlock`, {
    deviceId: getDeviceId(device),
    data: {},
  });
  cli.action.stop();
}

export async function otaFlash(
  device: Device,
  downloadUrl: string,
  sha256sum: string,
) {
  cli.action.start('Sending flashing details');
  await axios.post(`${getBaseURL(device)}/ota_flash`, {
    deviceId: getDeviceId(device),
    data: {
      downloadUrl,
      sha256sum,
    },
  });
  cli.action.stop();
}
