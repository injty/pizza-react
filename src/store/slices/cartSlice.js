import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	items: [],
	total: 0,
};

export const cartSlice = createSlice({
	name: "cart_slice",
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
			state.total = state.items.reduce((acc, item) => {
				return acc + item.price;
			}, 0);
		},
		removeItem: (state, action) => {
			state.items.filter((item) => item.id !== action.payload);
		},
		clearItems: (state) => {
			state.items = [];
		},
	},
});

const {actions, reducer} = cartSlice;
export const {addItem, removeItem, clearItem} = actions;
export default reducer;
