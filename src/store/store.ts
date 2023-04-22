import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favorites/favorite.slice';
import { userSlice } from './user/user.slice';
import { api } from './api/api';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true,
});

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
