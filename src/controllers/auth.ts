import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import bcrypt from 'bcrypt';

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
            res.status(201).send();
        } catch (err) {
            res.json(err);
            res.status(500);
        }
    }

    public static async login(req: Request, res: Response): Promise<void | Response> {
        const userRepository = getRepository(User);
        const { email, password } = req.body;
        const user = await userRepository.findOne({ email });

        if (!user) {
            return res.status(404).json('User not found');
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(401).json('Password incorrect');
        }

        return res.send('W00!');
    }

    public static logout(_req: Request, res: Response): void {
        res.send('ok');
    }


}