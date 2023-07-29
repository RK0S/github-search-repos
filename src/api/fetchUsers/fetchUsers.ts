import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { usersActions } from '../../store/reducers/usersSlice';
import { RootState } from '../../store/store';
import { UsersFetchingResponse, User, Order } from '../../types/user';

interface fetchUsersProps {
    order: Order;
    page: number;
    q: string;
}

export const fetchUsers = createAsyncThunk<User[], fetchUsersProps, { state: RootState }>(
    'users/fetchUsers',
    async (props, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        const { order, page, q } = props;
        try {
            const response = await axios.get<UsersFetchingResponse>(
                'https://api.github.com/search/users',
                {
                    params: {
                        q: q,
                        page: page,
                        sort: 'repositories',
                        order: order
                    }
                }
            );

            if (!response.data) {
                throw new Error();
            }

            dispatch(usersActions.setTotalCount(response.data.total_count));
            return response.data.items;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
