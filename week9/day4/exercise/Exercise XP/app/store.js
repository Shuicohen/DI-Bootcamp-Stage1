import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import logger from 'redux-logger';

const appReducer = combineReducers({
    userReducer,
});

const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;