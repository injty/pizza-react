import { configureStore } from '@reduxjs/toolkit';
import category from './slices/categoryIndexSlice';
import sort from './slices/sortSlice';
import page from './slices/paginationSlice';

export const store = configureStore({
	reducer: {
		category,
		sort,
		page
	},
});
