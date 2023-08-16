"use client";

import React from "react";
import "./DiscountCode.scss";
import Image from "next/image";

// images
import Frame97 from "../../../../../public/images/pagecart/ShippingAndTax/Frame 97.svg";
import Input from "@/components/contactus/Input";
function DiscountCode() {
  const [open, setOpen] = React.useState(false);

 
  return (
    <div className="DiscountCode">
      <div className="ShippingAndTaxpart0">
        <button
          type="button"
          onClick={() => {
            setOpen((r) => !r);
          }}
        >
          <span>Apply Discount Code</span>{" "}
          <Image src={Frame97} alt="" className={open ? "arrow" : ""}></Image>{" "}
        </button>
      </div>
      {open ? (
        <div className="groupInputShippingAndTax">
          <div className="Enterdiscountcode">
            <Input
              id="Enterdiscountcode"
              placeholder="Enter discount code"
              label="Enter discount code"
              name="Enterdiscountcode"
              isrequired={false}
              type="text"
            />
          </div>

          <button type="button" className="btnApply">
            Apply Discount
          </button>
          <button type="button" className="Multiple">Check Out with Multiple Addresses</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DiscountCode;
