import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

const LOCAL_STORAGE_KEY = 'AUTH_ACCESS';

export const handleGetAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEY) ?? '';

export function useAuth() {
    const auth = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();
}