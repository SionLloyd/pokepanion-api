import { Router } from 'express';

import { MiscController } from './controllers/misc';
import { AuthController } from './controllers/auth';
import { UserController } from './controllers/user';


const router = Router();

router.get('/', MiscController.home);

router.post('/auth/signup', AuthController.signup);
router.post('/auth/login', AuthController.login);
router.get('/auth/logout', AuthController.logout);

router.get('/user/:id', UserController.get);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

export { router }