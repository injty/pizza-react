import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import categoryReducer from "./slices/categoryIndexSlice.js";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
    category: categoryReducer,
	},
});
