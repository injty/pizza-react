import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const FetchPizzasSlice = createSlice({
  name: "fetch_pizzas_slice",
  initialState,
  reducers: {
    consoles: () => {
      console.log("fired");
    },
  },
});

const { actions, reducer } = FetchPizzasSlice;

export const { consoles } = actions;
export default reducer;
