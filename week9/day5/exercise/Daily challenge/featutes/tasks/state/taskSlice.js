import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, name: 'Finish project', categoryId: 1, completed: false },
    { id: 2, name: 'Go grocery shopping', categoryId: 2, completed: true },
    { id: 3, name: 'Study Redux Toolkit', categoryId: 1, completed: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
      }
    },
    toggleTaskCompletion: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
      if (taskIndex >= 0) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
      }
    },
  },
});

export const { addTask, editTask, toggleTaskCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
