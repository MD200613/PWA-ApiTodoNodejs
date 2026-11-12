import { Request, Response, NextFunction, response } from 'express';
import { UserService } from '../services/user.service';
import { JwtToken } from '../utils/jwtToken.utils';
import { LoginUserRequest, RegisterUserRequest } from '../types/user.types';

const userService = new UserService();
const jwtToken = new JwtToken();

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

            if(user) {
                const token = await jwtToken.generateToken(user);
                res.cookie("jwt", token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    path: "/",
                    maxAge: 1000 * 60 * 60
                })
                res.status(200).json();
                return;
            }
            res.status(400).json("Erreur lors de la connexion");
        } catch (error) {
            next(error);
        }
    }

    logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        res.clearCookie("jwt");
        res.status(200).json("Déconnexion réussie");
    }
}