import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    triggerDisplay: (state) => {
      state.value = !state.value;
    },
  },
});

export const {
  triggerDisplay
} = menu.actions;
export default menu.reducer;
