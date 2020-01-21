import { Request, Response } from 'express';

export class MiscController {
    public static home(_req: Request, res: Response) {
        res.send('ok');
    }
}