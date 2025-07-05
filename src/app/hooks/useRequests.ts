
import { APIGetUser, APISignIn } from "../types/auth"
import { useAPI } from "./useAPI"

async function signIn({ email, password }: { email: string, password: string }) {
    return await useAPI<APISignIn>('auth/login/', 'POST', { email, password });
}

async function getUser() {
    return await useAPI<APIGetUser>('auth/get_user/', 'GET', undefined, true);
}

async function signUp({ name, email, password }: { name: string, email: string, password: string }) {
    return await useAPI('auth/create_account/', 'POST', { name, email, password });
}

async function refreshToken(refresh: string) {
    return await useAPI('auth/refresh/', 'POST', { refresh });
}

export const useRequests = () => ({
    // Auth
    signIn,
    getUser,
    refreshToken,

    // Register
    signUp,
})