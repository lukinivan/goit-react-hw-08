import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  selectors: { selectFilter: (state) => state.name },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilter } = filtersSlice.actions;
export const { selectFilter } = filtersSlice.selectors;
