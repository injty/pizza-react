import { configureStore } from "@reduxjs/toolkit";
import category from "./slices/categoryIndexSlice";
import sort from "./slices/sortSlice";
import page from "./slices/paginationSlice";
import search from "./slices/searchSlice";
import cart from "./slices/cartSlice";
import fetchPizzas from "./slices/fetchPizzasSlice";

export const store = configureStore({
  reducer: {
    category,
    sort,
    page,
    search,
    cart,
    fetchPizzas,
  },
});
