import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { LoginUserRequest, RegisterUserRequest } from '../types/user.type';

const userService = new UserService();

export class UserController {
    registerUser = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
        const userRequest : RegisterUserRequest = req.body;

        try {
            const user = await userService.registerUser(userRequest);
            if(user == null) {
                res.status(400).json("Un compte à cet adresse mail existe déjà");
                return;
            }

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    connectUser = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
        const userRequest : LoginUserRequest = req.body;

        try {
            const user = await userService.connectUser(userRequest);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}