import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],  
  loading: false,
  error: null,
};


export const fetchUserData = createAsyncThunk('users/fetchUserData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/'); 
  const data = await response.json();
  console.log("Fetched Users: ", data);
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; 
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
