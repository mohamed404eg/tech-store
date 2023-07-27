import React from "react";

import "./GruopProducts1.scss";
import Link from "next/link";
import Product from "@/components/product/Product";

type GruopProductsType = {
  list?: { id: number; title: string; href: string }[];
  marginBottom?: number;
};
function GruopProducts1({ list, marginBottom }: GruopProductsType) {
  return (
    <div
      className="container"
      style={marginBottom ? { marginBottom: ` ${marginBottom}px ` } : {}}
    >
      {list ? (
        <>
          <div className="GruopProducts1-list">
            <ul>
              <li className="GruopProducts1-li-0">
                <Link href={""}>MSI GS Series</Link>
              </li>
              <li>
                <Link href={""}>MSI GT Series</Link>
              </li>
              <li>
                <Link href={""}>MSI GL Series</Link>
              </li>
              <li>
                <Link href={""}>MSI GE Series</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="GruopProducts1 ">
        <div className="GruopProducts1Logo">
          <p className="GruopProducts1-title">Custome Builds</p>
          <Link href={""}>See All Products</Link>
        </div>
        <div className="GruopProducts1ALL">
          <div className="newAllProducts">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GruopProducts1;
