import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Profile, UserType } from "../../../app/types/auth"

type AuthState = {
    user: Profile | null;
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
        setUser: (state, action: PayloadAction<Profile | null>) => {
            state.user = action.payload
        },
        setUserType: (state, action: PayloadAction<UserType | null>) => {
            state.userType = action.payload
        },
    }
})

export const { setUser, setUserType } = authSlice.actions;

export default authSlice.reducer;