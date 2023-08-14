import React from "react";

import "./Part4.scss";
import Image from "next/image";

import imageWomin from "../../../../public/images/PageProduct/image 22.png";
import arrowBlue from "../../../../public/images/PageProduct/arrowBlue.svg";
import Link from "next/link";
function Part4() {
  return (
    <div className="PageProduct-Part4">
      <div className="chiled0">
        <div className="contact">
          <Link href={"#"}>
            <span>Product Support</span>
            <span>
              <Image src={arrowBlue} alt="arrowBlue"></Image>
            </span>
          </Link>
          <Link href={"#"}>
            <span>FAQ</span>
            <span>
              <Image src={arrowBlue} alt="arrowBlue"></Image>
            </span>
          </Link>
          <Link href={"#"}>
            <span>Our Buyer Guide</span>
            <span>
              <Image src={arrowBlue} alt="arrowBlue"></Image>
            </span>
          </Link>
        </div>
        <div className="Image">
          <div className="linear"></div>
          <Image src={imageWomin} alt="imageWomin"></Image>
          <div className="liner1"></div>
        </div>
      </div>
    </div>
  );
}

export default Part4;
