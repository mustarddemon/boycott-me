import { describe, it, expect, jest, afterEach } from '@jest/globals';
import { Application } from './application';
import { setupServer } from './server/setupServer';

jest.mock('./server/setupServer', () => ({
  setupServer: jest.fn(),
}));

describe('Class: Application', () => {
  const setupServerMock = setupServer as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create an Express application', () => {
    setupServerMock.mockReturnValue({ app: { mocked: true } });
    const app = Application.createApplication();
    expect(app).toEqual({ mocked: true });
    expect(setupServerMock).toHaveBeenCalledTimes(1);
    expect(setupServerMock).toHaveBeenCalledWith(3000);
  });
});
