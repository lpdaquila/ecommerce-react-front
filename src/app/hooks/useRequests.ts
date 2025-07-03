
import { APIGetUser, APISignIn, APISignUp } from "../types/auth"
import { useAPI } from "./useAPI"

async function signIn({ email, password }: { email: string, password: string }) {
    return await useAPI<APISignIn>('auth/signin/', 'POST', { email, password });
}

async function getUser() {
    return await useAPI<APIGetUser>('auth/user/');
}

async function signUp({ name, email, password }: { name: string, email: string, password: string }) {
    return await useAPI<APISignUp>('auth/register/', 'POST', { name, email, password });
}

export const useRequests = () => ({
    // Auth
    signIn,
    getUser,

    // Register
    signUp,
})