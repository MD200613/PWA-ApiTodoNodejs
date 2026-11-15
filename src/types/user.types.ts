export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface RegisterUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}