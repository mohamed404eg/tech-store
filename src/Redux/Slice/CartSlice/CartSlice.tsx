import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  ProductsCart: {
    id: string | number;
    Quantity: number;
  }[];
  Quantity: number;
}

export type payloadProductProps = {
  id: string | number;
  Quantity: number;
};

const initialState: CounterState = {
  ProductsCart: [],
  Quantity: 1,
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addProCart: (state, action: { payload: payloadProductProps }) => {
      const item = state.ProductsCart.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.Quantity = action.payload.Quantity;
      } else {
        state.ProductsCart.push(action.payload);
      }
    },
    RemoveProCart: (state, action: { payload: payloadProductProps }) => {
      const filter = state.ProductsCart.filter(
        (p) => p.id !== action.payload.id
      );
      state.ProductsCart = filter;
    },
    QuantityProCart: (state, action: { payload: payloadProductProps }) => {
      const filter = state.ProductsCart.filter((p) =>
        p.id !== action.payload.id
          ? p.Quantity
            ? (p.Quantity += 1)
            : (p.Quantity = 1)
          : action.payload.Quantity
      );
      state.ProductsCart = filter;
    },
    RestProCart: (state, action: { payload: payloadProductProps }) => {
      state.ProductsCart = [];
    },
    // Quantity
    EditQuantity: (state, action) => {
      state.Quantity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProCart, RemoveProCart, QuantityProCart, RestProCart ,EditQuantity} =
  CartSlice.actions;

export default CartSlice.reducer;
