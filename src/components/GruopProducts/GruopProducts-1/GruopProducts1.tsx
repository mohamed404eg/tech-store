import React from "react";

import "./GruopProducts1.scss";
import Link from "next/link";
import Product from "@/components/product/Product";
import axios from "axios";

type GruopProductsType = {
  list?: { id: number; title: string; href: string }[];
  marginBottom?: number;
  api: {
    data: [
      {
        id: number;
        attributes: {
          title: string;
          images: string;
          images2: string;
        };
      }
    ];
  };
};
function GruopProducts1({ list, marginBottom, api }: GruopProductsType) {
  // console.log(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}products`);

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
                <Link href={"/Catalog/1"}>MSI GS Series</Link>
              </li>
              <li>
                <Link href={"/Catalog/1"}>MSI GT Series</Link>
              </li>
              <li>
                <Link href={"/Catalog/1"}>MSI GL Series</Link>
              </li>
              <li>
                <Link href={"/Catalog/1"}>MSI GE Series</Link>
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
          <Link href={"/Catalog/1"}>See All Products</Link>
        </div>
        <div className="GruopProducts1ALL">
          <div className="newAllProducts">
            {api.data.map(
              (value: {
                id: number;
                attributes: {
                  title: string;
                  images: string;
                  images2: string;
                };
              }) => {
                return (
                  <Product
                    id={value.id}
                    title={value.attributes.title}
                    urlImage={value.attributes.images}
                    urlImage2={value.attributes.images2}
                    data={value}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GruopProducts1;
