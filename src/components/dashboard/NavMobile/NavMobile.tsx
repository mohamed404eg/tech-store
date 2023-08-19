"use client";
import React from "react";

import "./NavMobile.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Frame98 from "../../../../public/images/dashboard/Frame 98.svg";
import Image from "next/image";
function NavMobile() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [tsxt, setText] = React.useState("Account Dashboard");

  function textBtn() {}
  return (
    <div className="NavMobile">
      <div className="btn" onClick={() => setOpen((b) => !b)}>
        <button type="button">
          <span> {tsxt}</span> <Image src={Frame98} alt=" " />
        </button>
      </div>
      <div className={open ? "groupOne groupOneOpen" : " groupOne groupOneNClose"}>
        <div>
          <Link
            href={"/dashboard"}
            className={pathname === "/dashboard" ? "active" : ""}
          >
            Account Dashboard
          </Link>
          <Link
            href={"/dashboard/information"}
            className={pathname === "/dashboard/information" ? "active" : ""}
          >
            Account Information
          </Link>
          <Link
            href={"/dashboard/address"}
            className={pathname === "/dashboard/address" ? "active" : ""}
          >
            Address Book
          </Link>
          <Link
            href={"/dashboard/orders"}
            className={pathname === "/dashboard/orders" ? "active" : ""}
          >
            My Orders
          </Link>
        </div>
        <div>
          {" "}
          <Link
            href={"/dashboard/downloadable"}
            className={pathname === "/dashboard/downloadable" ? "active" : ""}
          >
            My Downloadable Products
          </Link>
          <Link
            href={"/dashboard/payment"}
            className={pathname === "/dashboard/payment" ? "active" : ""}
          >
            Stored Payment Methods
          </Link>
          <Link
            href={"/dashboard/billing"}
            className={pathname === "/dashboard/billing" ? "active" : ""}
          >
            Billing Agrements
          </Link>
          <Link
            href={"/dashboard/wishlist"}
            className={pathname === "/dashboard/wishlist" ? "active" : ""}
          >
            My Wish List
          </Link>
        </div>
        <div>
          {" "}
          <Link
            href={"/dashboard/reviews"}
            className={pathname === "/dashboard/reviews" ? "active" : ""}
          >
            My Product Reviews
          </Link>
          <Link
            href={"/dashboard/newsletter"}
            className={pathname === "/dashboard/newsletter" ? "active" : ""}
          >
            Newsletter Subscriptions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
