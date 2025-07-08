import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { useRequests } from "./useRequests";
import { setUser } from "../../services/redux/reducers/authReducer";

const LOCAL_STORAGE_KEY = 'AUTH_ACCESS';
const REFRESH_STORAGE_KEY = 'REFRESH_ACCESS';

export function saveToken({ token, refresh }: { token: string, refresh: string }) {
    localStorage.setItem(LOCAL_STORAGE_KEY, token);
    localStorage.setItem(REFRESH_STORAGE_KEY, refresh);
}

export const handleGetRefreshToken = () => localStorage.getItem(REFRESH_STORAGE_KEY) ?? '';

export const handleGetAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) ?? '';

export function useAuth() {
    const auth = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const { signIn, signUp, getUser, refreshToken } = useRequests();

    const user = {
        user: auth.user
    }

    async function tryRefreshToken() {
        const refresh = handleGetRefreshToken();
        if (!refresh) return false;

        const response = await refreshToken(refresh);
        if (!response.detail) {
            const data = response.data as { access: string };
            localStorage.setItem(LOCAL_STORAGE_KEY, data.access);
            return true;
        }
        return false;
    }

    async function handleInitUser() {
        let access_token = handleGetAccessToken();
        if (!access_token) return;

        let response = await getUser();

        if (response.detail == "Given token not valid for any token type") {
            const refreshed = await tryRefreshToken();
            if (refreshed) {
                response = await getUser();
            } else {
                handleSignOut();
            }
        }

        if (!response.detail && response.data) {
            dispatch(setUser(response.data.user))
        }
    }

    async function handleSignIn(email: string, password: string) {
        const response = await signIn({ email, password });

        if (!response.detail && response.data) {
            saveToken(
                {
                    token: response.data?.access,
                    refresh: response.data?.refresh
                }
            );
            dispatch(setUser(response.data.user));
        }

        return response;
    }

    async function handleSignUp(name: string, email: string, password: string) {
        const response = await signUp({ name, email, password })

        return response;
    }

    function handleSignOut() {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.removeItem(REFRESH_STORAGE_KEY);
        dispatch(setUser(null));
    }

    return {
        user,
        isLogged: auth.user != null,
        handleInitUser,
        handleSignIn,
        handleSignUp,
        handleSignOut,
    }
}