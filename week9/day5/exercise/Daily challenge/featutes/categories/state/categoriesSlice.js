import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        { id: 1, name: 'Work' },
        { id: 2, name: 'Personal' },
        { id: 3, name: 'Fitness' },
        { id: 4, name: 'Shopping' },
      ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    editCategory: (state, action) => {
      const { id, updatedCategory } = action.payload;
      const categoryIndex = state.categories.findIndex(category => category.id === id);
      if (categoryIndex >= 0) {
        state.categories[categoryIndex] = { ...state.categories[categoryIndex], ...updatedCategory };
      }
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(category => category.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
