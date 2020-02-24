import { Router } from 'express';

import { MiscController } from './controllers/misc';
import { AuthController } from './controllers/auth';
import { UserController } from './controllers/user';

import { authentication } from './lib/middleware/authentication';

const router = Router();

router.use(authentication);

router.get('/', MiscController.home);

router.post('/auth/signup', AuthController.signup);
router.post('/auth/login', AuthController.login);
router.delete('/auth/logout', AuthController.logout);

router.get('/user', UserController.get);
router.put('/user', UserController.update);
router.delete('/user', UserController.delete);

export { router }