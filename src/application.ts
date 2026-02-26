import { setupServer } from './server/setupServer';
import type { Express } from 'express';

export class Application {
  public static createApplication(): Express {
    const app = setupServer(3000);
    return app.app;
  }
}
