import { configureStore } from '@reduxjs/toolkit';
import category from "./slices/categoryIndexSlice.js";

export const store = configureStore({
	reducer: {
		category,
	},
});
