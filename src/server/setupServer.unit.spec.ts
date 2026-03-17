import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { setupServer } from './setupServer';

let listenMock: jest.Mock = jest.fn();

jest.mock('express', () => {
  const expressMock = Object.assign(
    jest.fn(() => ({
      get: jest.fn(),
      listen: listenMock,
      post: jest.fn(),
      json: jest.fn(() => jest.fn()),
    })),
    {
      json: jest.fn(() => jest.fn()),
    }
  );
  return {
    __esModule: true,
    default: expressMock,
    json: expressMock.json,
  };
});

beforeEach(() => {
  listenMock = jest.fn();
});

describe('Function: setupServer', () => {
  beforeEach(() => {
    listenMock = jest.fn();
  });

  it('should start the server on the specified port', () => {
    setupServer(3000);
    expect(listenMock).toHaveBeenCalledWith(3000, expect.any(Function));
  });

  it('sets up the GET /api/v1/status endpoint', () => {
    const { app } = setupServer(3000);
    expect(app.get).toHaveBeenCalledWith(
      '/api/v1/status',
      expect.any(Function)
    );
  });
});
