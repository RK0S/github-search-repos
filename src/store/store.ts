import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import { usersReducer } from './reducers/usersSlice';

const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer
});

export const setupStore = (initialState: any = {}) => {
    return configureStore({
        preloadedState: initialState,
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
