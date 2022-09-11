import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pageIndex: 1,
}

export const changePage = createSlice({
	name: 'change_page_index',
	initialState,
	reducers: {
		setPageIndex: (state, action) => {
			state.pageIndex = action.payload;
		}
	}
});

export const { setPageIndex } = changePage.actions;
export default changePage.reducer;