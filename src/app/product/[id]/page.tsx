import React from "react";

import "./product.scss";
import Part0 from "@/components/PageProduct/Part0/Part0";
import Price from "@/components/PageProduct/Quantity and price/Price";
import Quantity from "@/components/PageProduct/Quantity and price/Quantity";
import Action from "@/components/PageProduct/action/Action";
import ComponentManagement from "@/components/PageProduct/ComponentManagement/ComponentManagement";
const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="product">
      <div className="part0 container">
        <Part0 />

        <div className="PriceQuantityAction">
          <div>
            <Price />
            <Quantity />
          </div>
          <Action />
        </div>
      </div>
      <div className="part1 container">
        <div className="child1">
          <ComponentManagement />
        </div>
        <div className="child2"></div>
      </div>
    </div>
  );
};

export default Page;
