import React from "react";

import "./Part0.scss";
import ProductCart from "./ProductCart/ProductCart";
function part0() {
  return (
    <div className="pageCart">
      <div className="part0-head">
        <span>Item</span>
        <div className="head-part0">
          <span>Price</span>
          <span>Qty </span>
          <span>Subtotal</span>
        </div>
      </div>
      <div className="groupProductCart">
        <ProductCart />
        <ProductCart />
      </div>

      <div className="pageCartPart0Btn">
        <div>
          <button type="button">Continue Shopping</button>
          <button type="button">Clear Shopping Cart</button>
        </div>
        <button type="button">Update Shopping Cart</button>
      </div>
    </div>
  );
}

export default part0;
