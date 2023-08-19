import AccountInformation from "@/components/dashboard/AccountInformation/AccountInformation";
import Address from "@/components/dashboard/Address/Address";
import Billing from "@/components/dashboard/Billing/Billing";
import Downloadable from "@/components/dashboard/Downloadable/Downloadable";
import MyOrders from "@/components/dashboard/MyOrders/MyOrders";
import Newsletter from "@/components/dashboard/Newsletter/Newsletter";
import Payment from "@/components/dashboard/Payment/Payment";
import Reviews from "@/components/dashboard/Reviews/Reviews";
import Wishlist from "@/components/dashboard/Wishlist/Wishlist";
import { usePathname } from "next/navigation";
import React from "react";

function page({ params }: { params: { name: string } }) {
  console.log(params.name);

  return (
    <>
      <div>
        {params.name === "information" ? <AccountInformation /> : <></>}
      </div>
      <div>{params.name === "address" ? <Address /> : <></>}</div>
      <div>{params.name === "orders" ? <MyOrders /> : <></>}</div>
      <div>{params.name === "downloadable" ? <Downloadable /> : <></>}</div>
      <div>{params.name === "payment" ? <Payment /> : <></>}</div>
      <div>{params.name === "billing" ? <Billing /> : <></>}</div>
      <div>{params.name === "wishlist" ? <Wishlist /> : <></>}</div>
      <div>{params.name === "reviews" ? <Reviews /> : <></>}</div>
      <div>{params.name === "newsletter" ? <Newsletter /> : <></>}</div>
    </>
  );
}

export default page;
