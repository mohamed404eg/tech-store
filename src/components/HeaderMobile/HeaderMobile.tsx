import React from "react";

import "./HeaderMobile.scss";
import Image from "next/image";

// images
import Logo from "../../../public/images/HeaderMobile/Logo.png";
import BacLogo from "../../../public/images/HeaderMobile/bacLogo.svg";
import ShopInfo from "../header/ShopInfo/ShopInfo";

// mui
import MenuIcon from "@mui/icons-material/Menu";

// jsx
import DrawerMobile from "./Drawer/DrawerMobile";
import Search from "./Search/Search";
import Cart from "../header/cart/Cart";
import Account from "../Account/Account";
import CartMobile from "./CartMobile/CartMobile";

function HeaderMobile() {
  return (
    <div className="HeaderMobile">
      <div className="HeaderMobile-top">
        <span className="HeaderMobile-Logo">
          <Image src={Logo} alt="Logo" />
          <Image src={BacLogo} alt="BacLogo" />
        </span>
        <span className="ShopInfo-time">
          <ShopInfo isMobile={true} />
        </span>
        <span className="HeaderMobile-ContactUs">Contact Us</span>
      </div>
      <div className="HeaderMobile-bottom">
        <DrawerMobile>
          <MenuIcon sx={{ color: "#fff" }} className="HeaderMobile-Menu" />
        </DrawerMobile>
        <Search />
        <div className="Cart-Account">
          <CartMobile />
          <Account isImage={false} />
        </div>
      </div>
    </div>
  );
}

export default HeaderMobile;
