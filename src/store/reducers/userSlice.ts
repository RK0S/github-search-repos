import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserByLogin } from '../../api/fetchUsersByLogin/fetchUserByLogin';
import { UserSchema, User } from '../../types/user';

const initialState: UserSchema = {
    data: undefined,
    isLoading: false,
    error: undefined
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserByLogin.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUserByLogin.fulfilled, (state, action: PayloadAction<User>) => {
            state.isLoading = false;
            state.error = undefined;
            state.data = action.payload;
        });
        builder.addCase(fetchUserByLogin.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    }
});

export const { reducer: userReducer, actions: userActions } = userSlice;
