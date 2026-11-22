import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Unauthorized } from "../errors/Unauthorized";

export const Connection = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.cookies?.jwt;

    if(!token)
        throw new Unauthorized("Vous devez être connecté pour exécuter cette action");

    try {
        jwt.verify(token, process.env.JWT_SECRET || "abc");
        next();
    } catch (error) {
        throw new Unauthorized("Votre session est expirée. Veuillez vous reconnecter");
    }
    
}