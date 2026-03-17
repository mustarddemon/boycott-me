import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { setupServer } from './setupServer';
import { json } from 'node:stream/consumers';

let listenMock: jest.Mock;

jest.mock('express', () => {
  const originalModule = jest.requireActual('express');
  return {
    __esModule: true,
    // @ts-expect-error - We are mocking the default export, so we need to tell TypeScript to ignore the type error
    ...originalModule,
    json: jest.fn(),
    default: () => ({ get: jest.fn(), listen: listenMock, post: jest.fn() }),
  };
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
