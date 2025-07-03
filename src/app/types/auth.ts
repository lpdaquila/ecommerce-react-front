import { Permission } from "./permissions";

export type User = {
    name: string;
    email: string;
    password: string;
}

export type UserType = {
    is_staff: boolean;
    permissions: Permission[]
}

export type Profile = {
    id: number;
    name: string;
    email: string;
    phone?: string;
    document?: string;
}

// API

export type APIGetUser = {
    user: User;
    userType: UserType;
}

export type APISignIn = {
    user: User;
    refresh: string;
    access: string;
}

export type APISignUp = {
    name: string,
    email: string,
    password: string,
}