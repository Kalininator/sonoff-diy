import express from 'express';
import { Server } from 'http';
import ip from 'ip';

export async function hostFile(
  file: string,
  clientAddress: string,
): Promise<string> {
  return new Promise((resolve) => {
    const app = express();
    const port = 42069;

    let server: Server | undefined;
    app.get('/firmware', (req, res) => {
      res.sendFile(file, () => {
        const ip =
          req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        // console.log(`File received by ${ip}`);
        if (ip?.includes(clientAddress)) {
          server?.close();
        }
      });
    });

    server = app.listen(port, () => {
      // console.log(`Listening on http://${ip.address()}:${port}/firmware`);
      resolve(`http://${ip.address()}:${port}/firmware`);
    });
  });
}
