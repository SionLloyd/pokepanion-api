import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';

export class UserController {
    public static async get(req: Request, res: Response): Promise<void> {
        const userRepository = getRepository(User);
        try {
            const user = await userRepository.findOneOrFail((req as any).user);
            delete user.password;
            res.json(user);
        } catch (err) {
            res.json(err);
            res.status(500);
        }
    }

    public static update(_req: Request, res: Response): void {
        res.send('ok');
    }

    public static delete(_req: Request, res: Response): void {
        res.send('ok');
    }

    
}