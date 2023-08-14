import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ComponentManagementState {
  ViewComponentManagement: number;
}

const initialState: ComponentManagementState = {
  ViewComponentManagement: 0,
};

export const ComponentManagementSlice = createSlice({
  name: "ComponentManagementSlice",
  initialState,
  reducers: {
    ViewComponentManagementChange: (state, action: PayloadAction<0 | 1 | 2>) => {
      state.ViewComponentManagement = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ViewComponentManagementChange } = ComponentManagementSlice.actions;

export default ComponentManagementSlice.reducer;
