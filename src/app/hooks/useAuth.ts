import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { useRequests } from "./useRequests";
import { setUser } from "../../services/redux/reducers/authReducer";

const LOCAL_STORAGE_KEY = 'AUTH_ACCESS';

export const handleGetAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) ?? '';

export function useAuth() {
    const auth = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const { signIn, signUp, getUser } = useRequests();

    const user = {
        user: auth.user
    }

    async function handleInitUser() {
        const access_token = handleGetAccessToken();
        if (!access_token) return;

        const response = await getUser();

        if (!response.detail) {
            dispatch(setUser(response.data?.user))
        }
    }

    async function handleSignIn(email: string, password: string) {
        const response = await signIn({ email, password });

        if (!response.detail) {
            dispatch(setUser(response.data?.user))
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