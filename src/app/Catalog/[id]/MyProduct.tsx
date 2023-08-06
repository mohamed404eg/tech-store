"use client";

import Product from "@/components/product/Product";
import ProductTow from "@/components/productTow/ProductTow";
import React from "react";
import { useSelector } from "react-redux";

function MyProduct() {
  const count = useSelector(
    (state: {
      CatalogSliceCounter: {
        ViewProducts: number;
      };
    }) => state.CatalogSliceCounter.ViewProducts
  );
  return (
    <>
      {count ? (
        <>
          <ProductTow /> <ProductTow /> <ProductTow /> <ProductTow />
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default MyProduct;
