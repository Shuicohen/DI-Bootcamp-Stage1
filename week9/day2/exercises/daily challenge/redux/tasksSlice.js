import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        days: {},
    },
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload;
            if (!state.days[day]) {
                state.days[day] = [];
            }
            state.days[day].push(task);
        },
        editTask: (state, action) => {
            const { day, taskIndex, newTask } = action.payload;
            if (state.days[day]) {
                state.days[day][taskIndex] = newTask;
            }
        },
        deleteTask: (state, action) => {
            const { day, taskIndex } = action.payload;
            if (state.days[day]) {
                state.days[day].splice(taskIndex, 1);
            }
        },
    },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;