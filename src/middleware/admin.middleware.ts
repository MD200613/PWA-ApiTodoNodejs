import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Unauthorized } from "../errors/Unauthorized";
import { UserRepository } from "../repositories/user.repository";

const connection = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies?.jwt;
    const userRepository = new UserRepository();

    if (token.payload.role != userRepository.findRoleByDescription("admin"))
        throw new Unauthorized("Vous n'avez pas les privilèges nécessaires");
    
    next();
}