import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aluminumCans: 0,
  hdpe2Bottles: 0,
  pet1Bottles: 0,
  glassBottles: 0,
  milkCartons: 0,
  totalItems: 0,
  sessionTotal: 0,
  allTimeTotal: 0,
  mostCommon: '',
};

const detectionSlice = createSlice({
  name: 'detection',
  initialState,
  reducers: {
    incrementItem: (state, action) => {
      state[action.payload] += 1;
      state.totalItems += 1;
      state.sessionTotal += 1;
      // Update most common item logic here
    },
    resetSession: (state) => {
      state.sessionTotal = 0;
      state.totalItems = 0;
      state.aluminumCans = 0;
      state.hdpe2Bottles = 0;
      state.pet1Bottles = 0;
      state.glassBottles = 0;
      state.milkCartons = 0;
    },
  },
});

export const { incrementItem, resetSession } = detectionSlice.actions;

export default detectionSlice.reducer;