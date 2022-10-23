import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: '',
}

const searchSlice = createSlice({
	name: 'search_slice',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.value = action.payload;
		}
	}
});

const { actions, reducer } = searchSlice;

export const { setSearch } = actions;
export default reducer;