import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import ICredentials from "./types/Credentials";

export const loginAction = createAsyncThunk(
    'loginAction',
    async (userData: ICredentials, thunkAPI) => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', userData)
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);
export const loginToken = createAsyncThunk(
    'loginToken',
    async (token: string, thunkAPI) => {
        try {
            const response = await axios.get('https://dummyjson.com/auth/me', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)