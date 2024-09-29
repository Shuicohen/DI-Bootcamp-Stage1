import React, { createContext, useReducer} from "react";

export const TaskContext = createContext();

export const ADD_TASK = "ADD_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const FILTER_TASKS = "FILTER_TASKS";

const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), text: action.text, completed: false };
            return { ...state, tasks: [...state.tasks, newTask] };
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id ? { ...task, completed: true } : task
                ),
            };
        case REMOVE_TASK:
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.id) };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.id ? { ...task, text: action.newText } : task
                ),
            };
        case FILTER_TASKS:
            return { ...state, filter: action.filter };
        default:
            return state;
    }
}

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, { tasks: [], filter: "all" });

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}