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
        profile: auth.user
    }

    async function tryRefreshToken() {
        const refresh = handleGetRefreshToken();
        if (!refresh) return false;

        console.log('refresh token: ', refresh)

        const response = await refreshToken(refresh);
        if (!response.detail) {
            const data = response.data as { access: string };
            localStorage.setItem(LOCAL_STORAGE_KEY, data.access);
            console.log('token no local storage:', LOCAL_STORAGE_KEY)
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
            dispatch(setUser(response.data.profile))
        }

        console.log(response.detail)
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
            dispatch(setUser(response.data.profile));
        }

        return response;
    }

    async function handleSignUp(name: string, email: string, password: string) {
        const response = await signUp({ name, email, password })

        return response;
    }

    function handleSignOut() {
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