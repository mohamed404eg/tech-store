import React from "react";

import "./NewProducts.scss";
import Product from "@/components/product/Product";
import Link from "next/link";
import Arrow from "../Arrow/Arrow";
import ArrowAllProducts from "./Arrow/ArrowAllProducts";

type NewProductsProps = {
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
function NewProducts({ api }: NewProductsProps) {
  return (
    <div className="NewProducts container">
      <div className="newAllProductsTitle">
        <h2>New Products</h2>
        <Link href={"/Catalog/1"}>See All New Products</Link>
      </div>

      <div className="newAllProducts-Arrow">
        <ArrowAllProducts x="left" />
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
        <ArrowAllProducts x="right" />
      </div>
    </div>
  );
}

export default NewProducts;
