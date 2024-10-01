import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByDay: {},
  selectedDay: null
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    editTask: (state, action) => {
      const { day, taskId, updatedTask } = action.payload;
      const dayTasks = state.tasksByDay[day];
      const taskIndex = dayTasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        dayTasks[taskIndex] = { ...dayTasks[taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      state.tasksByDay[day] = state.tasksByDay[day].filter(task => task.id !== taskId);
    },
    selectDay: (state, action) => {
      state.selectedDay = action.payload;
    }
  }
});

export const { addTask, editTask, deleteTask, selectDay } = tasksSlice.actions;
export default tasksSlice.reducer;
