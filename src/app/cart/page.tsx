import React from "react";

import "./Cart.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import Part0 from "@/components/cart/Part0";
import Summary from "@/components/cart/Summary/Summary";
let data = [
  {
    dir: "Home",
    href: "#",
  },
  {
    dir: "Contact Us",
    href: "#",
    dirCurrent: true,
  },
];
function page() {
  return (
    <div className="container CartTop">
      <div>
        <Breadcrumbs data={data} />
      </div>
      <div className="Cart">
          <h1>Shopping Cart</h1>
        <div className="part0">

          <Part0 />
        </div>
        <div className="part1">
          <h2>Summary</h2>
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default page;
