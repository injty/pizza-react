import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	index: 0,
};

export const categoryIndexSlice = createSlice({
	name: 'category_index',
	initialState,
	reducers: {
		setIndex: (state, action) => {
			state.index = action.payload;
		},
	},
});

export const { setIndex } = categoryIndexSlice.actions;

export default categoryIndexSlice.reducer;
