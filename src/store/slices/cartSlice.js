import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart_slice",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isHaveItem = state.items.find((item) => item.id === action.payload.id);

      if (state.items.count < 0) {
        state.items.count = 0;
      } else if (isHaveItem) {
        isHaveItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      state.totalCount = state.items.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
    },
    takeItem: (state, action) => {
      const isHaveItem = state.items.find((item) => item.id === action.payload.id);
      isHaveItem && isHaveItem.count--
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      state.totalCount = state.items.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce((acc, item) => {
        return acc + item.price * item.count;
      }, 0);
      state.totalCount = state.items.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addItem, takeItem, removeItem, clearItems } = actions;
export default reducer;
