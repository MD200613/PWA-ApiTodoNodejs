import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export const createUserRoutes = () : Router => {
    const userController = new UserController();

    const router = Router();

    router.post('/register', userController.registerUser);
    router.get('/login', userController.connectUser);
    return router;
}