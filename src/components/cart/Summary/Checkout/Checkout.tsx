import React from "react";

import "./Checkout.scss";
import Image from "next/image";

import Group114 from "../../../../../public/images/pagecart/Group 114.svg";
function Checkout() {
  return (
    <div className="cartCheckout">
      <button type="button" className="Proceed">
        Proceed to Checkout
      </button>
      <button type="button" className="paypal">
        <span>Check out with </span>
        <Image src={Group114} alt="paypal"></Image>
      </button>
      <button type="button" className="Multiple">Check Out with Multiple Addresses</button>
    </div>
  );
}

export default Checkout;
