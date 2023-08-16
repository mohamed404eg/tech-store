import React from "react";

import "./ProductCart.scss";
import Image from "next/image";
import Quantity from "@/components/PageProduct/Quantity and price/Quantity";

import image51 from "../../../../public/images/ProductCart/image 51.png";
import deletesvg from "../../../../public/images/ProductCart/delete.svg";
import edit from "../../../../public/images/ProductCart/edit.svg";
function ProductCart() {
  return (
    <>
      <div className="ProductCart">
        <Image src={image51} alt=""></Image>
        <p>
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </p>

        <div className="flex-s1">
          <span className="price">$4,349.00</span>
          <div className="ProductCartQuantity">
            <Quantity />
          </div>
          <span className="Subtotal">$13,047.00</span>
        </div>
        <div className="action">
          <Image src={deletesvg} alt=""></Image>
          <Image src={edit} alt=""></Image>
        </div>
      </div>

      <div className="respMd">
        {" "}
        <div>
          <div>
            <span>Price</span>
            <span>$4,349.00</span>
          </div>
          <div>
            <span>Qty</span>
            <span>
              {" "}
              <Quantity />
            </span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>$13,047.00</span>
          </div>
        </div>
        <div className="actionMd">
          <Image src={deletesvg} alt=""></Image>
          <Image src={edit} alt=""></Image>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
