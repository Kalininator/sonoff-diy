import axios from 'axios';
import { cli } from 'cli-ux';

export type SonoffInfo = {
  switch: string;
  startup: string;
  pulse: string;
  pulseWidth: number;
  ssid: string;
  otaUnlock: boolean;
};

export type DeviceInfo = {
  address: string;
  port: number;
};

function getBaseURL(device: DeviceInfo) {
  return `http://${device.address}:${device.port}/zeroconf`;
}

export function getDeviceId(device: Device): string {
  return device.fqdn.split('.')[0].replace('eWeLink_', '');
}

export function getDeviceInfo(device: Device): DeviceInfo {
  return {
    address: device.address,
    port: device.service.port,
  };
}

export async function getInfo(device: DeviceInfo) {
  const res = await axios.post(`${getBaseURL(device)}/info`, {
    deviceId: '',
    data: {},
  });
  return JSON.parse(res.data.data) as SonoffInfo;
}

export async function unlockOTA(device: DeviceInfo) {
  cli.action.start('Unlocking OTA');
  await axios.post(`${getBaseURL(device)}/ota_unlock`, {
    deviceId: '',
    data: {},
  });
  cli.action.stop();
}

export async function otaFlash(
  device: DeviceInfo,
  downloadUrl: string,
  sha256sum: string,
) {
  cli.action.start('Sending flashing details');
  await axios.post(`${getBaseURL(device)}/ota_flash`, {
    deviceId: '',
    data: {
      downloadUrl,
      sha256sum,
    },
  });
  cli.action.stop();
}
