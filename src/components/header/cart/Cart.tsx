"use client";
import Image from "next/image";
// images

import jam_shopping_cart from "../../../../public/images/header/jam_shopping_cart.svg";
import MSI from "../../../../public/images/cart/image 42.png";
import Delete from "../../../../public/images/cart/delete.svg";
import Edit from "../../../../public/images/cart/edit.svg";
import Paypal from "../../../../public/images/cart/Paypal.svg";
import { useEffect, useRef, useState } from "react";

import "./Cart.scss";
import { log } from "console";
import Link from "next/link";

function Cart() {
  const [hidden, sethidden] = useState(true);

  useEffect(() => {
    document.documentElement.addEventListener(
      "click",
      (event) => {
        let e: EventTarget | null | MouseEvent = event.target;
        const nodeName = (e as HTMLElement)?.nodeName;

        if (nodeName !== "IMG") {
          if (!hidden) {
            sethidden(true);
          }
        }
      },
      true
    );
  });
  return (
    <>
      <div className="CartElem">
        {/*  */}
        <div
          className="icon-num CartElem"
          onClick={() => {
            sethidden((e) => !e);
          }}
          >
          <Image
            src={jam_shopping_cart}
            alt="jam_shopping_cart"
            className="CartElem"
            />
          <span className="CartElem"> 3</span>
        </div>
            {/*  */}

        <div
          className={
            hidden ? " pop-Cart display-none CartElem" : " pop-Cart CartElem "
          }
        >
          {" "}
          <div className="triangle">
            <div className="inner-triangle"></div>
          </div>
          <p className="MyCart CartElem">My Cart</p>
          <p className="numItem CartElem">2 item in cart</p>
          <button className="goCart ">
            <Link href={""}>View or Edit Your Cart</Link>
          </button>
          {/* product */}
          <span className="line CartElem"></span>
          <div className="product CartElem">
            <div className="Quantity CartElem">
              <span className="Quantity-1 CartElem">1</span>
              <span className="Quantity-2 CartElem">x</span>
            </div>
            <div className="img">
              <Image src={MSI} alt=""></Image>
            </div>
            <div className="desc">
              EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On
            </div>
            <div className="action CartElem">
              <span className="CartElem">
                <Image src={Delete} alt="Delete" />
              </span>
              <span className="CartElem">
                <Image src={Edit} alt="Edit" />
              </span>
            </div>
          </div>
          {/* ==product== */}
          {/* product */}
          <span className="line CartElem"></span>
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
            <div className="action CartElem">
              <span className="CartElem">
                <Image src={Delete} alt="Delete" />
              </span>
              <span className="CartElem">
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
      </div>
    </>
  );
}

export default Cart;
