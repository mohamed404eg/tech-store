"use client";

import React from "react";

function ProductJs() {
  React.useEffect(() => {
    const Products = document.querySelectorAll(".Product");
    const noclick = document.querySelectorAll(".noclick");

    Products.forEach((ele) => {
      console.log("accs");

      ele.addEventListener("click", (eve) => {
        noclick.forEach((eleIns) => {
          if (eve.target === eleIns) {
            eve.preventDefault();
          }
        });
      });
    });
  }, []);

  return <></>;
}

export default ProductJs;
