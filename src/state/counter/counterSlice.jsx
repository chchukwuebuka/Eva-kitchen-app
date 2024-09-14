import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, 
  items: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1; 
      }
    },
    reset: (state) => {
      state.value = 0; 
    },
    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity; 
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity }); 
      }
      state.value = 0;
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { increment, decrement, reset, addItemToCart, removeItemFromCart } = counterSlice.actions;
export default counterSlice.reducer;
