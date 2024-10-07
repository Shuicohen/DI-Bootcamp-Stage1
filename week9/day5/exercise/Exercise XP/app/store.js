import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "../featutes/books/state/slice";

const appReducer = combineReducers({
    bookReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store