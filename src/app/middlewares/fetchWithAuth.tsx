import { useAPI } from "../hooks/useAPI"
import { useAuth } from "../hooks/useAuth";
import { useRequests } from "../hooks/useRequests";

export async function fetchWithAuth<TypeDataResponse>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    data?: object,
): Promise<{
    data?: TypeDataResponse,
    detail: string;
}> {
    const { tryRefreshToken, handleSignOut } = useAuth();
    const { getUser } = useRequests();

    const response = await useAPI(endpoint, method, data);

    if (response.detail.includes("Given token not valid")) {
        const refreshed = await tryRefreshToken();
        if (refreshed) {
            const _resp = await getUser();
        } else {
            handleSignOut();
        }
    }

    return response as { data?: TypeDataResponse; detail: string };
}