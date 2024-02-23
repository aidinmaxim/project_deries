import {createSlice} from '@reduxjs/toolkit';
import IAuthState from "./types/AuthState";
import {loginAction, loginToken} from "./authAction";

const initialState: IAuthState = {
    user: undefined,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null

                state.user = action.payload
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.isLoading = false
                state.user = undefined
                state.error = action.payload as string
            })
            .addCase(loginToken.fulfilled, (state, action) => {
                state.user = action.payload
            })
    },
})

export const {logoutUser} = authSlice.actions;
export default authSlice;
