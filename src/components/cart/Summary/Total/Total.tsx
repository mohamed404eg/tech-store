import React from "react";

import "./Total.scss";
function Total() {
  return (
    <div className="cartTotal">
      <div className="GroupTotal">
        <div>
          <span>Subtotal</span>
          <span>$13,047.00</span>
        </div>
        <div>
          <div>
            {" "}
            <span>Shipping </span>
            <span>$21.00</span>
          </div>
          <p>
            (Standard Rate - Price may vary depending on the item/destination.
            Shop Staff will contact you.)
          </p>
        </div>
        <div>
          <span>Tax</span>
          <span>$1.91</span>
        </div>
        <div>
          <span>GST(10%)</span>
          <span>$1.91</span>
        </div>
        <div>
          <span>Order Total</span>
          <span>$13,068.00</span>
        </div>
      </div>
    </div>
  );
}

export default Total;
