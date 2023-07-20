import React from "react";

import "./HeaderMobile.scss";
import Image from "next/image";

// images
import Logo from "../../../public/images/HeaderMobile/Logo.png";
import BacLogo from "../../../public/images/HeaderMobile/bacLogo.svg";
import ShopInfo from "../header/ShopInfo/ShopInfo";
function HeaderMobile() {
  return (
    <div className="HeaderMobile">
      <div className="HeaderMobile-top">
        <span className="HeaderMobile-Logo">
          <Image src={Logo} alt="Logo" />
          <Image src={BacLogo} alt="BacLogo" />
        </span>
        <span className="ShopInfo-time">
          <ShopInfo />
        </span>
        <span className="HeaderMobile-ContactUs">Contact Us</span>
      </div>
      <div></div>
    </div>
  );
}

export default HeaderMobile;
