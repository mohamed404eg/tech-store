import Image from "next/image";
import React from "react";

import ProductImg from "../../../public/images/Product/image 29.png";
import ProductImg2 from "../../../public/images/Product/image 29-2.png";
import instock from "../../../public/images/Product/instock.svg";
import like from "../../../public/images/Product/Group 106.svg";
import statistics from "../../../public/images/Product/Group 107.svg";
import Group107 from "../../../public/images/Catalog/Group 107.svg";
import cart from "../../../public/images/Product/cart.svg";
import Link from "next/link";

import "./ProductTow.scss";
import MyRating from "./rating/MyRating";
function ProductTow() {
  return (
    <Link href={"#"} className="ProductTow">
      <div className="stock">
        <Image src={instock} alt="" />
        <span>in stock</span>
      </div>

      {/* tow */}
      <div className="tow">
        <div className="tow-1">
          <div className="images">
            <Image src={ProductImg} alt="Product" />{" "}
          </div>
          <MyRating value={1} />
        </div>
        <div className="tow-2">
          <span className="modal">SKU D5515AI</span>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            mollitia eveniet corrupti amet ducimus porro, odio, commodi unde
            repellat facere fuga quibusdam repellendus! Dolor debitis quis
            possimus velit, a eligendi.
          </p>
          <div className="price">
            <span>$499.00</span>
            <span>$499.00</span>
          </div>
          <button className="AddToCart">
            <Image src={cart} alt="cart" />
            <span>Add To Cart</span>
          </button>
        </div>
        <div className="tow-3">
          <div>
            <span>CPU</span>
            <span>N/A</span>
          </div>
          <div>
            <span>Featured</span>
            <span>N/A</span>
          </div>
          <div>
            <span>I/O Ports</span>
            <span>N/A</span>
          </div>
        </div>
        <div className="tow-4">

            <span>
              <Image src={Group107} alt="statistics" />
            </span>
            <span>
              <Image src={like} alt="like" />
            </span>
            <span>
              <Image src={statistics} alt="statistics" />
            </span>
        
        </div>
      </div>
    </Link>
  );
}

export default ProductTow;

//  {/* Hover */}
//  <div className="Hover-action">
//  <span>
//    <Image src={like} alt="like" />
//  </span>
//  <span>
//    <Image src={statistics} alt="statistics" />
//  </span>
// </div>
// {/* ==Hover== */}
// <div className="stock">
//  <Image src={instock} alt="" />
//  <span>in stock</span>
// </div>
// <div className="images">
//  <Image src={ProductImg} alt="Product" />
//  <Image src={ProductImg2} alt="ProductImg2" />
// </div>
// <MyRating value={1} />
// <p className="desc">
//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia
//  eveniet corrupti amet ducimus porro, odio, commodi unde repellat facere
//  fuga quibusdam repellendus! Dolor debitis quis possimus velit, a
//  eligendi.
// </p>
// <div className="price">
//  <span>$499.00</span>
//  <span>$499.00</span>
// </div>
// {/* Hover */}
// <button className="AddToCart">
//  <Image src={cart} alt="cart" />
//  <span>Add To Cart</span>
// </button>
// {/* ==Hover== */}
