import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/fetchUsers/fetchUsers';
import { UsersSchema, Order, User } from '../../types/user';

const initialState: UsersSchema = {
    isLoading: false,
    error: undefined,
    users: [],
    order: 'desc',
    page: 1,
    q: '',
    total_count: 0
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        setOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload;
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.total_count = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.isLoading = false;
            state.error = undefined;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
    }
});

export const { reducer: usersReducer, actions: usersActions } = usersSlice;
