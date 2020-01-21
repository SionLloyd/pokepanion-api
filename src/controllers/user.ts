import { Request, Response } from 'express';

export class UserController {
    public static get(req: Request, res: Response): void {
        res.json({id: req.params.id});
    }

    public static update(_req: Request, res: Response): void {
        res.send('ok');
    }

    public static delete(_req: Request, res: Response): void {
        res.send('ok');
    }

    
}