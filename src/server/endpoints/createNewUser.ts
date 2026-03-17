import { Request, Response } from 'express';
import { createUser } from '../../lib/database/createUser';

export async function createNewUser(req: Request, res: Response) {
  const { username, validated } = req.body;
  if (typeof username !== 'string' || typeof validated !== 'boolean') {
    return res.status(400).send({ error: 'Invalid input' });
  }
  const createdUser = await createUser({ username, validated });
  res.status(201).send(createdUser);
}
