import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/user';

export const fetchUserByLogin = createAsyncThunk<User, string>(
    'users/fetchUserByLogin',
    async (login, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get<User>(`https://api.github.com/users/${login}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
