import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"; 
import paymentReducer from "./payment";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    payment: paymentReducer
  },
});
