import React from "react";

import "./product.scss";
import Part0 from "@/components/PageProduct/Part0/Part0";
import Price from "@/components/PageProduct/Quantity and price/Price";
import Quantity from "@/components/PageProduct/Quantity and price/Quantity";
import Action from "@/components/PageProduct/action/Action";
import ComponentManagement from "@/components/PageProduct/ComponentManagement/ComponentManagement";
import ProdectPageSngale from "@/components/PageProduct/ProdectPageSngale/ProdectPageSngale";
import Part3 from "@/components/PageProduct/Part3/Part3";
import Part4 from "@/components/PageProduct/Part4/Part4";
import Part5 from "@/components/Part5/Part5";

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
        <div className="child2">

          <ProdectPageSngale />
        </div>

       
      </div>
      <div className="part3"> <Part3 /></div>
      <div className="part3"> <Part4 /></div>
      <div className="part5"> <Part5 /></div>
    </div>
  );
};

export default Page;
