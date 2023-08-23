"use client";
import Image from "next/image";
import React from "react";

// images
import Frame97 from "../../../../public/images/PageProduct/Frame 97.svg";
import Frame98 from "../../../../public/images/PageProduct/Frame 98.svg";
import { useDispatch, useSelector } from "react-redux";
import { EditQuantity } from "@/Redux/Slice/CartSlice/CartSlice";

export let QuantityState: number;

// type
type stateProductsCart = {
  Cart: {
    ProductsCart: {}[];
    Quantity: number;
  };
};
function Quantity({}) {
  const state = useSelector((state: stateProductsCart) => state.Cart.Quantity);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (state < 1) {
      dispatch(EditQuantity(1));
    }
  }, [state]);

  return (
    <div className="Quantity">
      <input
        type="number"
        placeholder="1"
        value={state}
        onChange={(elem) => {
          let num = parseFloat(elem.currentTarget.value);
          dispatch(EditQuantity(num));
        }}
      ></input>
      <div className="arrow">
        <Image
          src={Frame98}
          alt="+"
          onClick={() => {
            console.log("click");
            dispatch(EditQuantity(state + 1));
          }}
        ></Image>
        <Image
          src={Frame97}
          alt="-"
          onClick={() => {
            if (state > 1) {
              dispatch(EditQuantity(state - 1));
            }
          }}
        ></Image>
      </div>
    </div>
  );
}

export default Quantity;
