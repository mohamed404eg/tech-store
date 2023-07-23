"use client";

import Image from "next/image";
import React from "react";

type ArrowType = {
  x: "left" | "right";
};

// images
import ArrowLeft from "../../../../public/images/Home/SectionWelcome/ArrowLeft.svg";
import ArrowRight from "../../../../public/images/Home/SectionWelcome/ArrowRight.svg";
function Arrow({ x }: ArrowType) {
  return (
    <>
      <Image
        src={x === "left" ? ArrowLeft : ArrowRight}
        alt="Arrow"
        className={x}
      />
    </>
  );
}

export default Arrow;
