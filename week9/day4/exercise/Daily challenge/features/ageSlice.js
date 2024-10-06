import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async actions using createAsyncThunk
export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async (_, { dispatch }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay
  return 1; // Increment by 1
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async (_, { dispatch }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay
  return 1; // Decrement by 1
});

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    value: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.value += action.payload;
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.value -= action.payload;
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
