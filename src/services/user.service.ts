import { between } from 'drizzle-orm';
import { UserRepository } from '../repositories/user.repository';
import { PasswordHasher } from '../utils/passwordHasher.utils';
import { LoginUserRequest, RegisterUserRequest, UserResponse } from '../types/user.types';
import {BadRequest} from '../errors/BadRequest'
import { v4 as uuidv4 } from 'uuid';

const userRepository = new UserRepository();
const passwordHasher = new PasswordHasher();

export class UserService {
    async registerUser(data: RegisterUserRequest): Promise<UserResponse | null> {

        if(await userRepository.findByEmail(data.email))
            throw new BadRequest("Un utilisateur avec ce email existe déjà");
        if(data.name.length < 1 || data.name.length > 100)
            throw new BadRequest("Le prénom de l'utilisateur doit contenir entre 1 et 100 caractères");
        if(data.surname.length < 1 || data.surname.length > 100)
            throw new BadRequest("Le nom de l'utilisateur doit contenir entre 1 et 100 caractères");
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email) || data.email.length > 100)
            throw new BadRequest("Le mail de l'utilisateur est invalide. Il doit contenir un maximum de 100 caractères");
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email) || data.email.length > 100)
            throw new BadRequest("Le mail de l'utilisateur est invalide. Il doit contenir un maximum de 100 caractères");
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,100}$/.test(data.password) || data.password.length > 100)
            throw new BadRequest("Le mot de passe n'est pas valide. Il faut un minimum de 12 caractères, au minimum une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial.");
        
        const now = new Date();
        const user = {
            id: uuidv4(),
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: await passwordHasher.HashPassword(data.password),
            roleId: await userRepository.findRoleByDescription("customer"),
            createdAt: now,
            updatedAt: now,
        }

        return await userRepository.registerUser(user);
    }

    async connectUser(data: LoginUserRequest): Promise<UserResponse | null> {
        const userToConnect = await userRepository.findByEmail(data.email);

        if(!userToConnect || !await passwordHasher.VerifyPassword(data.password, userToConnect.password)) 
            throw new BadRequest("email ou  mot de passe incorrect");

        return await userRepository.connectUser(data.email, data.password);
    }
}
