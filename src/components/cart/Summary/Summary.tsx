import React from "react";

import "./Summary.scss";
import ShippingAndTax from "./ShippingAndTax/ShippingAndTax";
import DiscountCode from "./DiscountCode/DiscountCode";
import Total from "./Total/Total";
import Checkout from "./Checkout/Checkout";
import FooterSummary from "./FooterSummary/FooterSummary";
function Summary() {
  return (
    <div className="pageCartSummary">
      <ShippingAndTax />
      <DiscountCode />
      <Total />
      <Checkout />
      <FooterSummary />
    </div>
  );
}

export default Summary;
