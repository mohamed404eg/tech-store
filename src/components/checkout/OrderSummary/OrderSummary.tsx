"use client";
import React from "react";

import "./OrderSummary.scss";
import Image from "next/image";

import image51 from "../../../../public/images/checkout/image 51.jpg";
import Frame97 from "../../../../public/images/checkout/Frame 97.svg";

type OrderSummaryProps = {
  classname?: string;
};
function OrderSummary({ classname }: OrderSummaryProps) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className={classname ? classname : "OrderSummary"}>
      <h2>Order Summary</h2>

      <div className="line"></div>

      <button type="button" onClick={() => setOpen((v) => !v)}>
        <span> 2 Items in Cart</span>
        <Image src={Frame97} alt=""></Image>
      </button>
      {open ? (
        <div className="groupProduct">
          <div className="product">
            <Image src={image51} alt=""></Image>
            <div>
              {" "}
              <p>
                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...
              </p>
              <div>
                <span>
                  Qty <span>1</span>
                </span>
                <span>$3,799.00</span>
              </div>
            </div>
          </div>
          <div className="product">
            <Image src={image51} alt=""></Image>
            <div>
              {" "}
              <p>
                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...
              </p>
              <div>
                <span>
                  Qty <span>1</span>
                </span>
                <span>$3,799.00</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default OrderSummary;
