import type { Server } from 'http';
import express from 'express';
import { getStatus } from './endpoints/getStatus';

export interface SetupServer {
  server: Server;
  app: express.Express;
}

export const setupServer = (port: number): SetupServer => {
  const expressApp = express();

  expressApp.get('/api/v1/status', getStatus);

  const server = expressApp.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  return { server, app: expressApp };
};
