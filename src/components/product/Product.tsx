import Image from "next/image";
import React from "react";

import ProductImg from "../../../public/images/Product/image 29.png";
import ProductImg2 from "../../../public/images/Product/image 29-2.png";
import instock from "../../../public/images/Product/instock.svg";
import like from "../../../public/images/Product/Group 106.svg";
import statistics from "../../../public/images/Product/Group 107.svg";
import cart from "../../../public/images/Product/cart.svg";
import Link from "next/link";

import "./Product.scss";
import MyRating from "./rating/MyRating";
import { type } from "os";
type productProps = {
  urlImage: string;
  urlImage2: string;
  title: string;
  id: number;
};
function Product({ urlImage, urlImage2, title, id }: productProps) {
  return (
    <Link href={`/product/${id}`} className="Product">
      {/* Hover */}
      <div className="Hover-action">
        <span>
          <Image src={like} alt="like" />
        </span>
        <span>
          <Image src={statistics} alt="statistics" />
        </span>
      </div>
      {/* ==Hover== */}
      <div className="stock">
        <Image src={instock} alt="" />
        <span>in stock</span>
      </div>
      <div className="images">
        <Image
          src={urlImage2 ? urlImage2 : ProductImg2}
          alt="ProductImg2"
          width={150}
          height={150}
        />
        <Image
          src={urlImage ? urlImage : ProductImg}
          alt="Product"
          width={150}
          height={150}
        />
      </div>
      <MyRating value={1} />
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia
        eveniet corrupti amet ducimus porro, odio, commodi unde repellat facere
        fuga quibusdam repellendus! Dolor debitis quis possimus velit, a
        eligendi.
      </p>
      <div className="price">
        <span>$499.00</span>
        <span>$499.00</span>
      </div>
      {/* Hover */}
      <button className="AddToCart">
        <Image src={cart} alt="cart" />
        <span>Add To Cart</span>
      </button>
      {/* ==Hover== */}
    </Link>
  );
}

export default Product;
