import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipeData } from '../api/api';
import { Recipe } from '../types/types';

interface DataState {
  items: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchRecipes = createAsyncThunk('data/fetchRecipes', async () => {
  const data: Recipe[] = await fetchRecipeData(); 
  return data;
});


const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default dataSlice.reducer;
