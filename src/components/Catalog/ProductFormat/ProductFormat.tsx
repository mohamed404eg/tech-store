"use client";
import React from "react";
import Frame49 from "../../../../public/images/Catalog/Frame 49.svg";
import Frame50 from "../../../../public/images/Catalog/Frame 50.svg";
import Frame49un from "../../../../public/images/Catalog/Frame 49 un.svg";
import Frame50un from "../../../../public/images/Catalog/Frame 50 un.svg";
import Image from "next/image";
import "./ProductFormat.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  CounterState,
  ViewProductsChange,
} from "@/Redux/Slice/CatalogSlice/CatalogSlice";

function ProductFormat() {
  const count = useSelector(
    (state: {
      CatalogSliceCounter: {
        ViewProducts: number;
      };
    }) => state.CatalogSliceCounter.ViewProducts
  );
  console.log(count);

  const dispatch = useDispatch();
  function handleFormat(value: 0 | 1) {
    dispatch(ViewProductsChange(value));
  }
  return (
    <>
      <Image
        onClick={() => handleFormat(0)}
        src={count === 0 ? Frame49 : Frame49un}
        alt=""
      ></Image>
      <Image
        onClick={() => handleFormat(1)}
        src={count === 1 ? Frame50 : Frame50un}
        alt=""
      ></Image>
    </>
  );
}

export default ProductFormat;
