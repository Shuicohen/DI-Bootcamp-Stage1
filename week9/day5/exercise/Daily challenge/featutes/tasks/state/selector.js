import { createSelector } from '@reduxjs/toolkit';

// Select tasks by category
export const selectTasksByCategory = (categoryId) =>
  createSelector(
    (state) => state.taskReducer.tasks,
    (tasks) => tasks.filter((task) => task.categoryId === categoryId)
  );

// Select completed tasks
export const selectCompletedTasks = createSelector(
  (state) => state.taskReducer.tasks,
  (tasks) => tasks.filter((task) => task.completed).length
);

// Select category by ID
export const selectCategoryById = (categoryId) =>
  createSelector(
    (state) => state.categoryReducer.categories,
    (categories) => categories.find((category) => category.id === categoryId)
  );
