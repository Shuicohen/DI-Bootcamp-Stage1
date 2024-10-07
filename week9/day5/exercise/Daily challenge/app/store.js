import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "../featutes/tasks/state/taskSlice";
import categoryReducer from "../featutes/categories/state/categoriesSlice";

const appReducer = combineReducers({
    taskReducer,
    categoryReducer,
});

const store = configureStore({
    reducer: appReducer,
});

export default store