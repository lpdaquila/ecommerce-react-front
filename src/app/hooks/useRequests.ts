import { AddressInfo, APIGetAdresses, } from "../types/address";
import { APIGetProfile, APIGetUser, APISignIn } from "../types/auth"
import { useAPI } from "./useAPI"

const signIn = async ({ email, password }: { email: string, password: string }) => {
    return await useAPI<APISignIn>('auth/login/', 'POST', { email, password }, false);
}

const signUp = async ({ name, email, password }: { name: string, email: string, password: string }) => {
    return await useAPI('auth/create_account/', 'POST', { name, email, password }, false);
}

const getUser = async () => {
    return await useAPI<APIGetUser>('auth/user/');
}

const refreshToken = async (refresh: string) => {
    return await useAPI('auth/refresh/', 'POST', { refresh }, false);
}

// CRUD Profile

const getProfile = async (id: number) => {
    return await useAPI<APIGetProfile>(`auth/user/profile/${id}`)
}

const editProfile = async (
    id: number,
    { name, email, document, phone }: { name?: string, email?: string, document?: string, phone?: string }
) => {
    return await useAPI(`auth/user/profile/${id}`, 'PUT', { name, email, document, phone })
}

const deleteAccount = async (id: number) => {
    return await useAPI(`auth/user/profile/${id}`, 'DELETE');
}

// CRUD Profile Address

const getAddresses = async () => {
    return await useAPI<APIGetAdresses>('auth/user/address/');
}

const createAddress = async (
    {
        address_name,
        address,
        number,
        complement,
        district,
        zip_code,
        city,
        state
    }: AddressInfo
) => {
    return await useAPI<AddressInfo>('auth/user/address/', 'POST', {
        address_name,
        address,
        number,
        complement,
        district,
        zip_code,
        city,
        state
    })
}

const editAddress = async (
    id: number,
    {
        address_name,
        address,
        number,
        complement,
        district,
        zip_code,
        city,
        state
    }: {
        address_name?: string;
        address?: string;
        number?: string;
        complement?: string;
        district?: string;
        zip_code?: string;
        city?: string;
        state?: string;
    }
) => {
    return await useAPI(`auth/user/address/${id}`, 'PUT', {
        address_name,
        address,
        number,
        complement,
        district,
        zip_code,
        city,
        state
    })
}

const deleteAddress = async (id: number) => {
    return await useAPI(`auth/user/address/${id}`, 'DELETE')
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

    // Address
    createAddress,
    getAddresses,
    editAddress,
    deleteAddress,
})