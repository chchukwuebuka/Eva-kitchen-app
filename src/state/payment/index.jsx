import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle', 
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    startPayment: (state) => {
      state.status = 'pending';
    },
    paymentSuccess: (state) => {
      state.status = 'success';
      state.error = null;
    },
    paymentFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    resetPayment: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { startPayment, paymentSuccess, paymentFailed, resetPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
