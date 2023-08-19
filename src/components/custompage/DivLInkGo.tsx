"use client";
import Link from "next/link";
import React from "react";
import imageArrow from "../../../public/images/custompage/imageArrow.svg";
import Image from "next/image";

function DivLInkGo() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <b onClick={() => setOpen((b) => !b)}>
        <span>Definitions & Interpretation</span>{" "}
        <Image src={imageArrow} alt=""></Image>
      </b>
      <div className={open ? "DivLInkGo divLInkGoOpen" : "divLInkGoClose"}>
        {" "}
        <Link href={""}>General</Link>
        <Link href={""}>Quotations</Link>
        <Link href={""}>Prices / Taxes</Link>
        <Link href={""}>Terms of Payment</Link>
        <Link href={""}>Credit Accounts</Link>
        <Link href={""}>Change of Ownership</Link>
        <Link href={""}>Information on the Products supplied</Link>
        <Link href={""}>Delivery</Link>
      </div>
    </div>
  );
}

export default DivLInkGo;
