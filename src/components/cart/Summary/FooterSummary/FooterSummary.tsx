import Image from "next/image";
import Link from "next/link";
import React from "react";


import "./FooterSummary.scss"
import primary1 from "../../../../../public/images/pagecart/primary 1.svg";
function FooterSummary() {
  return (
    <div className="FooterSummary">
      <Image src={primary1} alt=""></Image>
      <span className="line"></span>
      <p>
        <span>own</span> it now, up to 6 months interest free{" "}
        <Link href={""}>learn more</Link>
      </p>
    </div>
  );
}

export default FooterSummary;
