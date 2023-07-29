import axios from 'axios';
import { fetchUsers } from './fetchUsers';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('fetchUsers', () => {
    let dispatch: Dispatch;
    let getState: () => RootState;
    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    test('успешный ответ', async () => {
        const data = {
            total_count: 3,
            items: [
                { id: 1, avatar_url: 'qwe', html_url: 'qwe', login: 'qwe' },
                { id: 2, avatar_url: 'qwe', html_url: 'qweqq', login: 'qweqq' },
                { id: 3, avatar_url: 'qwe', html_url: 'qweq', login: 'qweq' }
            ]
        };

        mockedAxios.get.mockReturnValue(Promise.resolve({ data: data }));
        const result = fetchUsers({ order: 'asc', page: 1, q: 'fgf' });
        const action = await result(dispatch, getState, undefined);
        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(action.payload).toEqual(data.items);
    });

    test('ошибка в данных', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: undefined }));
        const result = fetchUsers({ order: 'asc', page: 1, q: 'fgf' });
        const action = await result(dispatch, getState, undefined);
        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(action.payload).toEqual('error');
    });

    test('ошибка', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject());
        const result = fetchUsers({ order: 'asc', page: 1, q: 'fgf' });
        const action = await result(dispatch, getState, undefined);
        expect(mockedAxios.get).toBeCalledTimes(1);
        expect(action.payload).toEqual('error');
    });
});
