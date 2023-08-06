import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  ViewProducts: number;
  

}

const initialState: CounterState = {
  ViewProducts: 0,
};

export const CatalogSlice = createSlice({
  name: "CatalogSliceCounter",
  initialState,
  reducers: {
    ViewProductsChange: (state, action: PayloadAction<0 | 1>) => {
      state.ViewProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ViewProductsChange } = CatalogSlice.actions;

export default CatalogSlice.reducer;
