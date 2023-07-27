"use client";

import Image from "next/image";
import React from "react";

type ArrowType = {
  x: "left" | "right";
};

// images
import ArrowLeft from "../../../../../public/images/ArrowAllProducts/ArrowLeft.svg";
import ArrowRight from "../../../../../public/images/ArrowAllProducts/ArrowRight.svg";
function ArrowAllProducts({ x }: ArrowType) {
  const ele = document.querySelector(".newAllProducts");
  const handleImageClickRight = () => {
    ele?.scrollBy({
      behavior: "smooth",
      left: -346,
    });
  };
  const handleImageClickLeft = () => {
    ele?.scrollBy({
      behavior: "smooth",
      left: 346,
    });
  };
  return (
    <>
      <Image
        onClick={x === "right" ? handleImageClickRight : handleImageClickLeft}
        src={x === "left" ? ArrowLeft : ArrowRight}
        alt="Arrow"
        className={x}
      />
    </>
  );
}

export default ArrowAllProducts;
