import { describe, it, expect, jest } from '@jest/globals';
import { getStatus } from './getStatus';
import { Request, Response } from 'express';

describe('Implementation GET /api/v1/status endpoint', () => {
  it('should return a 200 status code with { ok: true }', () => {
    const req = {} as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;

    getStatus(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ ok: true });
  });
});
