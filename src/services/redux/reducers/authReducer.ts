import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UserType } from "../../../models/Auth"

type AuthState = {
    user: User | null;
    userType: UserType | null;
};

const initialState: AuthState = {
    user: null,
    userType: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload
        },
        setUserType: (state, action: PayloadAction<UserType | null>) => {
            state.userType = action.payload
        },
    }
})

export const { setUser, setUserType } = authSlice.actions;

export default authSlice.reducer;