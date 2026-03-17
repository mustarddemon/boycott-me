import { describe, it, expect, jest } from '@jest/globals';
import { Request, Response } from 'express';
import { createUser } from '../../lib/database/createUser';
import { afterEach } from 'node:test';
import { createNewUser } from './createNewUser';

jest.mock('../../lib/database/createUser', () => ({
  createUser: jest.fn(),
}));

describe('Implementation POST /api/v1/users endpoint', () => {
  const createUserMock = createUser as jest.Mock<typeof createUser>;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return a 400 status code if the input is invalid', async () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    await createNewUser(
      {
        body: { username: 123, validated: 'not-boolean' },
      } as unknown as Request,
      res
    );
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ error: 'Invalid input' });
    expect(createUserMock).not.toHaveBeenCalled();
  });

  it('should return a 400 status code if the username is missing', async () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    await createNewUser(
      { body: { validated: true } } as unknown as Request,
      res
    );
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ error: 'Invalid input' });
    expect(createUserMock).not.toHaveBeenCalled();
  });

  it('should return a 201 status code with the created user', async () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as Response;
    createUserMock.mockResolvedValue({
      id: 'real-uuid',
      username: 'testuser',
      validated: true,
    });
    await createNewUser(
      { body: { username: 'testuser', validated: true } } as unknown as Request,
      res
    );
    expect(createUserMock).toHaveBeenCalledWith({
      username: 'testuser',
      validated: true,
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      id: 'real-uuid',
      username: 'testuser',
      validated: true,
    });
  });
});
