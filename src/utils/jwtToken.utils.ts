import jwt from "jsonwebtoken";
import { UserResponse } from "../types/user.types";

export class JwtToken {
    generateToken = async (user: UserResponse) => {
        const payload = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        };
        const secret = process.env.JWT_SECRET || "une cle secrete";
        const options = {
            expiresIn: "1d" as const,
        };
        return jwt.sign(payload, secret, options);
    };
}