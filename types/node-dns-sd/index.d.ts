type Device = {
  address: string;
  fqdn: string;
  modelName: string | null;
  familyName: string | null;
  service: {
    port: number;
    protocol: string;
    type: string;
  };
};

declare module 'node-dns-sd' {
  export function discover(config: { name: string }): Promise<Device[]>;
}
