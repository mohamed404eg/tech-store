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
import axios from "axios";

const Page = async ({ params }: { params: { id: string } }) => {
  const GETAPI = await axios
    .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}products/${params.id}`)
    .catch((err) => console.log(err));

  return (
    <div className="product">
      <div className="part0 container">
        <Part0 />

        <div className="PriceQuantityAction">
          <div>
            <Price data={GETAPI?.data.data} />
            <Quantity />
          </div>
          <Action data={GETAPI?.data.data} />
        </div>
      </div>
      <div className="part1 container">
        <div className="child1">
          <ComponentManagement data={GETAPI?.data.data} />
        </div>
        <div className="child2">
          <ProdectPageSngale  data={GETAPI?.data.data}/>
        </div>
      </div>
      <div className="part3">
        {" "}
        <Part3 />
      </div>
      <div className="part3">
        {" "}
        <Part4 />
      </div>
      <div className="part5">
        {" "}
        <Part5 />
      </div>
    </div>
  );
};

export default Page;
