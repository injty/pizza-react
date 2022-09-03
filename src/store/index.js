import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categoryIndexSlice';
import sort from './slices/sortSlice';

export const store = configureStore({
	reducer: {
		category,
		sort,
	},
});
