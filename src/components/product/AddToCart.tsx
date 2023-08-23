"use client";

import Image from "next/image";
import React from "react";

// image
import cart from "../../../public/images/Product/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addProCart,
  payloadProductProps,
} from "@/Redux/Slice/CartSlice/CartSlice";

// alert
import { enqueueSnackbar } from "notistack";

// type
type stateProductsCart = {
  Cart: {
    ProductsCart: {}[];
  };
};

type AddToCartProsp = {
  data: {};
};
function AddToCart(data: {
  data: {
    id: string | number;
    Quantity: number;
  };
}) {
  const dispatch = useDispatch();

  const state = useSelector(
    (state: stateProductsCart) => state.Cart.ProductsCart
  );

  const AddQuantity = { ...data.data, Quantity: 1 };
  return (
    <button
      className="AddToCart noclick"
      onClick={() => {
        // console.log(AddQuantity);
        dispatch(addProCart(AddQuantity));
        enqueueSnackbar("Added to cart", { variant: "success" });
      }}
    >
      <Image src={cart} alt="cart" className="noclick" />
      <span className="noclick">Add To Cart</span>
    </button>
  );
}

export default AddToCart;
