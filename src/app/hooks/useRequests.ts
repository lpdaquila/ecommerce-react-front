
import { APIGetProfile, APIGetUser, APISignIn, Profile } from "../types/auth"
import { useAPI } from "./useAPI"

async function signIn({ email, password }: { email: string, password: string }) {
    return await useAPI<APISignIn>('auth/login/', 'POST', { email, password }, false);
}

async function signUp({ name, email, password }: { name: string, email: string, password: string }) {
    return await useAPI('auth/create_account/', 'POST', { name, email, password }, false);
}

async function getUser() {
    return await useAPI<APIGetUser>('auth/user/');
}

async function refreshToken(refresh: string) {
    return await useAPI('auth/refresh/', 'POST', { refresh }, false);
}

// CRUD Profile

async function getProfile(id: number) {
    return await useAPI<APIGetProfile>(`auth/user/profile/${id}`)
}

async function editProfile(
    id: number,
    { name, email, document, phone }: { name?: string, email?: string, document?: string, phone?: string }
) {
    return await useAPI(`auth/user/profile/${id}`, 'PUT', { name, email, document, phone })
}

async function deleteAccount(id: number) {
    return await useAPI(`auth/user/profile/${id}`, 'DELETE');
}


export const useRequests = () => ({
    // Auth
    signIn,
    getUser,
    refreshToken,

    // Register
    signUp,

    // Profile
    getProfile,
    editProfile,
    deleteAccount,
})