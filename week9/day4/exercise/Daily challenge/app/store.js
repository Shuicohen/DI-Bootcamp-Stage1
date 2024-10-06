import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ageReducer from '../features/ageSlice';
import logger from 'redux-logger';

const appReducer = combineReducers({
    ageReducer,
});

const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;