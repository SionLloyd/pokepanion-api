import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';

export class AuthController {
    public static async signup(req: Request, res: Response): Promise<void> {
        const userRepository = getRepository(User);

        const user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = req.body.password;

        try {
            await userRepository.save(user);
            delete user.password;
            res.json(user);
        } catch (err) {
            res.json(err);
            res.status(500);
        }
    }

    public static login(_req: Request, res: Response): void {
        res.send('ok');
    }

    public static logout(_req: Request, res: Response): void {
        res.send('ok');
    }


}