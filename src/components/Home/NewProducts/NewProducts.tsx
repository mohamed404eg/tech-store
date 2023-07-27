import React from "react";

import "./NewProducts.scss";
import Product from "@/components/product/Product";
import Link from "next/link";
import Arrow from "../Arrow/Arrow";
import ArrowAllProducts from "./Arrow/ArrowAllProducts";
function NewProducts() {
  return (
    <div className="NewProducts container">
      <div className="newAllProductsTitle">
        <h2>New Products</h2>
        <Link href={""}>See All New Products</Link>
      </div>

      <div className="newAllProducts-Arrow">
        <ArrowAllProducts x="left" />
        <div className="newAllProducts">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <ArrowAllProducts x="right" />
      </div>
    </div>
  );
}

export default NewProducts;
