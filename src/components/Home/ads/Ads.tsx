import React from "react";

import "./Ads.scss";
import Image from "next/image";
import Link from "next/link";
import primary from "../../../../public/images/Home/Ads/primary 1.png";
function Ads() {
  return (
    <div className="HomeAds container">
      <div className="HomeAdsContent">
        <Image src={primary} alt="primary"></Image>
        <span className="line"></span>
        <p>
          <span>own</span>
          <span> it now, up to 6 months interest free </span>
          <Link href={""}>learn more</Link>
        </p>
      </div>
    </div>
  );
}

export default Ads;
