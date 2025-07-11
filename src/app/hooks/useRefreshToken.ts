import { useAuth } from "./useAuth";

export const useRefreshToken = () => {
    const { tryRefreshToken, handleSignOut } = useAuth();

    const handleNeedTokenRefresh = async (detail: string) => {
        if (detail.includes("Given token not valid")) {
            const refreshed = await tryRefreshToken();
            if (!refreshed) {
                handleSignOut();
                return false;
            }
            return true;
        }

        return false;
    };

    return { handleNeedTokenRefresh };
};
