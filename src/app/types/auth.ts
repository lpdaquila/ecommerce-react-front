import { Permission } from "./permissions";

export type UserType = {
    is_staff: boolean;
    permissions: Permission[]
}

export type User = {
    id: number;
    name: string;
}

export type Profile = {
    name: string;
    email: string;
    document?: string;
    phone?: string;
}

// API

export type APIGetUser = {
    user: User;
}

export type APIGetProfile = {
    profile: Profile;
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