"use client";
import Image from "next/image";
import React from "react";

import Group114 from "../../../../public/images/PageProduct/Group 114.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProCart } from "@/Redux/Slice/CartSlice/CartSlice";
import { enqueueSnackbar } from "notistack";
import { QuantityState } from "../Quantity and price/Quantity";

type ActionProps = {
  data: { id: string | number; Quantity: number };
};
function Action(data: ActionProps, count: number) {
  // type
  type stateProductsCart = {
    Cart: {
      ProductsCart: {}[];
      Quantity: number;
    };
  };

  const dispatch = useDispatch();

  const state = useSelector(
    (state: stateProductsCart) => state.Cart.ProductsCart
  );
  const stateQuantity = useSelector(
    (state: stateProductsCart) => state.Cart.Quantity
  );

  const AddQuantity = { ...data.data, Quantity: stateQuantity };
  return (
    <div className="productAction">
      <button
        className="AddtoCart"
        onClick={() => {
          // console.log(AddQuantity);
          dispatch(addProCart(AddQuantity));
          enqueueSnackbar("Added to cart", { variant: "success" });
        }}
      >
        {" "}
        Add to Cart
      </button>
      <button className="paypal">
        <Image src={Group114} alt="paypal"></Image>
      </button>
    </div>
  );
}

export default Action;
