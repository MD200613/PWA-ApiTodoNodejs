import jwt from "jsonwebtoken";
import { UserResponse } from "../types/user.types";

export class JwtToken {
    generateToken = async (user: UserResponse) => {
        // need 3 things to create a token: payload, secret, & options
        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            surname: user.surname,
        };
        const secret = process.env.JWT_SECRET || "une cle secrete";
        const options = {
            expiresIn: "1d" as const,
        };
        return jwt.sign(payload, secret, options);
    };
}