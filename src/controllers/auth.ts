import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import { Sessions } from '../lib/sessions';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

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

        await Sessions.create(user.id);

        const jwt = jsonwebtoken.sign({id: user.id}, 'lapras');
        return res.send(jwt);
    }

    public static async logout(req: Request, res: Response): Promise<void> {
        await Sessions.remove((req as any).user)
        res.status(204).end();
    }


}