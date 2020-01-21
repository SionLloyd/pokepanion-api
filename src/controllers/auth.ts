import { Request, Response } from 'express';

export class AuthController {
    public static signup(req: Request, res: Response): void {
        res.json(req.body);
    }

    public static login(_req: Request, res: Response): void {
        res.send('ok');
    }

    public static logout(_req: Request, res: Response): void {
        res.send('ok');
    }


}