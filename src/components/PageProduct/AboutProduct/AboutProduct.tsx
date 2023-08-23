import React from "react";

import "./AboutProduct.scss";
import ProductColor from "./ProductColor/ProductColor";
import Link from "next/link";
import ComponentManagement, {
  ComponentManagementProps,
} from "../ComponentManagement/ComponentManagement";
import ComponentManagementResult from "../ComponentManagementResult/ComponentManagementResult";

function AboutProduct({ data }: ComponentManagementProps) {
  return (
    <ComponentManagementResult>
      <div className="AboutProductBody">
        <h1>{data.attributes.title}</h1>
        <span className="firstReview">Be the first to review this product</span>
        <p className="desc">
          {data.attributes.desc ? data.attributes.desc : ""}
        </p>

        <div className="collectionProductColor">
          {data.attributes.color.map((co) => (
            <ProductColor key={co.id} id={co.id} colorCode={co.color} />
          ))}
        </div>
      </div>
    </ComponentManagementResult>
  );
}

export default AboutProduct;
