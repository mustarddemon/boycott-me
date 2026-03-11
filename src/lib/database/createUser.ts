import { prisma } from '../prisma';

export interface User {
    id: string;
    username: string;
    validated: boolean;
}

export const createUser = async (user: Omit<User, 'id'>) => {
    const createdUser = await prisma.users.create({
        data: {
            username: user.username,
            validated: user.validated,
        },
    });
    return createdUser;
}