import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { currentPage, category, sorted, order, search } = params;
    const { data } = await axios.get(`https://62ea2bcaad295463258626d6.mockapi.io/pizzas?page=${currentPage}&limit=4${category}${sorted}${order}${search}`)
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading' // loading | success | error
};

const FetchPizzasSlice = createSlice({
  name: "fetch_pizzas_slice",
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  }
});

const { reducer } = FetchPizzasSlice;

export default reducer;
