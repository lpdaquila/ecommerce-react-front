import { Permission } from "./permissions";

export type UserType = {
    is_staff: boolean;
    permissions: Permission[]
}

export type Profile = {
    name: string;
    email: string;
    phone?: string;
    document?: string;
}

// API

export type APIGetUser = {
    profile: Profile;
}

export type APISignIn = {
    profile: Profile;
    refresh: string;
    access: string;
}

export type APISignUp = {
    name: string,
    email: string,
    password: string,
}