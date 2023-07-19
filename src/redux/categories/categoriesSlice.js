import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'under construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state) => state,

  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
