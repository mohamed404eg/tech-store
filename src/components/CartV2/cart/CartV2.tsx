"use client";
import Image from "next/image";
// images

import jam_shopping_CartV2 from "../../../../public/images/header/jam_shopping_CartV2.svg";
import MSI from "../../../../public/images/cart/image 42.png";
import Delete from "../../../../public/images/cart/delete.svg";
import Edit from "../../../../public/images/cart/edit.svg";
import Paypal from "../../../../public/images/cart/Paypal.svg";
import { useEffect, useRef, useState } from "react";

import "./CartV2.scss";
import { log } from "console";
import Link from "next/link";

function CartV2() {
  return (
    <>
      <div className={"pop-CartV2 "}>
        {" "}
        {/* <div className="triangle">
          <div className="inner-triangle"></div>
        </div> */}
        <p className="MyCartV2 CartV2Elem">My Cart</p>
        <p className="numItem CartV2Elem">2 item in Cart</p>
        <button className="goCartV2 ">
          <Link href={""}>View or Edit Your Cart</Link>
        </button>
        {/* product */}
        <span className="line CartV2Elem"></span>
        <div className="product CartV2Elem">
          <div className="Quantity CartV2Elem">
            <span className="Quantity-1 CartV2Elem">1</span>
            <span className="Quantity-2 CartV2Elem">x</span>
          </div>
          <div className="img">
            <Image src={MSI} alt=""></Image>
          </div>
          <div className="desc">
            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On
          </div>
          <div className="action CartV2Elem">
            <span className="CartV2Elem">
              <Image src={Delete} alt="Delete" />
            </span>
            <span className="CartV2Elem">
              <Image src={Edit} alt="Edit" />
            </span>
          </div>
        </div>
        {/* ==product== */}
        {/* product */}
        <span className="line CartV2Elem"></span>
        <div className="product">
          <div className="Quantity">
            <span className="Quantity-1">1</span>
            <span className="Quantity-2">x</span>
          </div>
          <div className="img">
            <Image src={MSI} alt=""></Image>
          </div>
          <div className="desc">
            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On
          </div>
          <div className="action CartV2Elem">
            <span className="CartV2Elem">
              <Image src={Delete} alt="Delete" />
            </span>
            <span className="CartV2Elem">
              <Image src={Edit} alt="Edit" />
            </span>
          </div>
        </div>
        {/* ==product== */}
        <span className="line"></span>
        <div className="Subtotal">
          <span className="Subtotal-1">Subtotal:</span>
          <span className="Subtotal-2"> $499.00</span>
        </div>
        <button className="GoCheckout">Go to Checkout</button>
        <button className="GoCheckoutPaypal">
          <span className="with">Check out with</span>
          <span className="withPaypal">
            <Image src={Paypal} alt="Paypal" />
          </span>
        </button>
      </div>
    </>
  );
}

export default CartV2;
