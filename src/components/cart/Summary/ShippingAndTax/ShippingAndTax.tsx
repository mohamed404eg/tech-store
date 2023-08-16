"use client";

import React from "react";
import "./ShippingAndTax.scss";
import Image from "next/image";

// images
import Frame97 from "../../../../../public/images/pagecart/ShippingAndTax/Frame 97.svg";
import Input from "@/components/contactus/Input";
function ShippingAndTax() {
  const [open, setOpen] = React.useState(false);
  const [openSelect, setOpenSelect] = React.useState(false);

  //   openSelect Country

  function handleCountry() {
    setOpenSelect((b) => !b);
  }
  return (
    <div className="ShippingAndTax">
      <div className="ShippingAndTaxpart0">
        <button
          type="button"
          onClick={() => {
            setOpen((r) => !r);
          }}
        >
          <span>Estimate Shipping and Tax</span>{" "}
          <Image src={Frame97} alt="" className={open ? "arrow" : ""}></Image>{" "}
        </button>
        <p>Enter your destination to get a shipping estimate.</p>
      </div>
      {open ? (
        <div className="groupInputShippingAndTax">
          <div className="CountryDiv">
            {" "}
            <label htmlFor="Country">Country</label>
            <div>
              <select
                id="Country"
                onFocus={handleCountry}
                onBlur={handleCountry}
              >
                <option>Australia</option>
                <option>Egypt</option>
              </select>{" "}
              <Image
                src={Frame97}
                alt=""
                className={openSelect ? "arrow" : ""}
              ></Image>{" "}
            </div>{" "}
          </div>
          <div className="State-Zip">
            <Input
              id="StateProvince"
              placeholder=""
              label="State/Province"
              name="StateProvince"
              isrequired={false}
              type="text"
            />
            <Input
              id="ZipPostalCode"
              placeholder=""
              label="SZip/Postal Code"
              name="ZipPostalCode"
              isrequired={false}
              type="text"
            />
          </div>

          <div className="CartShipping">
            <div>
              <label htmlFor="StandardRate">Standard Rate</label>
              <div>
                {" "}
                <input
                  type="radio"
                  id="StandardRate"
                  name="Shipping"
                  defaultChecked
                />
                <span>
                  Price may vary depending on the item/destination. Shop Staff
                  will contact you. $21.00
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="Pickupfromstore">Pickup from store</label>
              <div>
                {" "}
                <input type="radio" id="Pickupfromstore" name="Shipping" />
                <span>1234 Street Adress City Address, 1234 $0.00</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ShippingAndTax;
