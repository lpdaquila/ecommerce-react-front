import axios, { AxiosError } from "axios";
import { APIError } from "../types/API";
import { handleGetAccessToken } from "./useAuth";

const baseURL = 'http://localhost:8000/api/v1'

export async function useAPI<TypeDataResponse>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data?: object,
    withAuth: boolean = false
): Promise<{
    data?: TypeDataResponse,
    detail: string
}> {
    // Auth 
    const access_token = handleGetAccessToken();

    let headers: Record<string, string> = {};

    if (withAuth && access_token) {
        headers['Authorization'] = `Bearer ${access_token}`
    }

    try {
        const request = await axios(`${baseURL}/${endpoint}`, {
            method,
            headers,
            data: method != 'GET' && data,
            params: method == 'GET' && data
        })

        // console.log(request.data) // debug

        return {
            data: request.data,
            detail: ''
        }

    } catch (e) {
        const error = e as AxiosError<APIError>;

        return {
            data: undefined,
            detail: error.response?.data.detail || error.message
        }
    }
}
