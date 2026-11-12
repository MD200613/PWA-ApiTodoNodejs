export interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface RegisterUserRequest {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface UserResponse {
    id: string;
    name: string;
    surname: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}