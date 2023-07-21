"use client";
import React from "react";

import "./CartMobile.scss";
import CartV2 from "@/components/CartV2/cart/CartV2";

import ChildrenModal from "@/components/Modal/ChildrenModal/ChildrenModal";

// images
import jam_shopping_cart from "../../../../public/images/HeaderMobile/jam_shopping_cart.svg";
import Image from "next/image";
function CartMobile() {
  return (
    <>
      <ChildrenModal
        btn={
          <div className="CartMobile">
            <Image src={jam_shopping_cart} alt="jam_shopping_cart" />
            <span>2</span>
          </div>
        }
      
      >
        <CartV2 />
      </ChildrenModal>
    </>
  );
}

export default CartMobile;
