import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Unauthorized } from "../errors/Unauthorized";
import { UserRepository } from "../repositories/user.repository";

export const Admin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userRepository = new UserRepository();
    const token = req.cookies?.jwt;

    const payload = jwt.verify(token, process.env.JWT_SECRET || "abc") as {
        role: string;
    }

    const adminRole = await userRepository.findRoleByDescription("admin");

    if (payload.role != adminRole)
        throw new Unauthorized("Vous n'avez pas les privilèges nécessaires");
    
    next();
}