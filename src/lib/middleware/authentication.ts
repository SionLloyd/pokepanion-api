import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { Sessions } from '../sessions';

interface Token {
    id: number;
    iat: number;
}

export async function authentication(req: Request, res: Response, next: NextFunction) {
    const openPaths = [
        '/',
        '/auth/signup',
        '/auth/login',
    ];

    if (openPaths.includes(req.path)) {
        return next();
    }

    const bearer = req.headers.authorization as string;

    if (!bearer) {
        return res.status(401).send('Missing bearer token');
    }

    const jwt = bearer.split(' ')[1];
    const token = jsonwebtoken.verify(jwt, 'lapras') as Token;

    try {
        const valid = await Sessions.verify(token.id);
        if (!valid) {
            throw new Error('Session is invalid');
        }
        (req as any).user = token.id;
        return next();
    } catch (err) {
        console.error(err);
        return res.status(401).send('Session is invalid');
    }
}