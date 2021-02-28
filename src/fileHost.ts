import express from 'express';
import { Server } from 'http';

export async function hostFile(file: string): Promise<Server> {
  return new Promise((resolve) => {
    const app = express();
    const port = 42069;

    app.get('/firmware', (_req, res) => {
      res.sendFile(file);
    });

    const server = app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      resolve(server);
    });
  });
}
