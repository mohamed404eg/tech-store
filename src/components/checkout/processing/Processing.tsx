"use client";

import React from "react";

import "./Processing.scss";
import Image from "next/image";
import Group4 from "../../../../public/images/checkout/Group 4.svg";
function Processing() {
  const [state, setState] = React.useState(0);
  return (
    <div className="Processing">
      <div className="Processingdiv">
        <div className="ProcessingOne">
          <Image src={Group4} alt=""></Image>

          <div className="line"></div>
        </div>
        <div className="ProcessingTow">
          <span>2</span>
          <div className="line"></div>
        </div>
      </div>
      <div className="ProcessingdivText">
        <div>Shipping</div>
        <div>Review & Payments</div>
      </div>
    </div>
  );
}

export default Processing;
