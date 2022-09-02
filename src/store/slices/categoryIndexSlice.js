import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
};

export const categoryIndexSlice = createSlice({
  name: 'categoryIndex',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.categoryIndex = action.payload 
    },
  },
});

export const { setIndex } = categoryIndexSlice.actions

export default categoryIndexSlice.reducer
