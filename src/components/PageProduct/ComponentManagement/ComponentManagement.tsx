"use client";

import React, { useState } from "react";
import AboutProduct from "../AboutProduct/AboutProduct";
import Details from "../Details/Details";
import Specs from "../MySpecs/Specs";
import { useSelector } from "react-redux";
import { ComponentManagementState } from "@/Redux/Slice/PageProductComponentManagement/ComponentManagementSlice";

export type ComponentManagementProps = {
  data: {
    id: string | number;
    Quantity: number;
    attributes: {
      afterdiscount: number;
      currentprice: number;
      title: string;
      desc: string;

      color: {
        id: number;
        color: string;
      }[];

      CPU: string;
      I_O_Ports: string;
      Featured: string;
      images: string;
      images2: string;
    };
  };
};
function ComponentManagement({ data }: ComponentManagementProps) {
  const countPage = useSelector(
    (state: {
      ComponentManagement: {
        ViewComponentManagement: number;
      };
    }) => state.ComponentManagement.ViewComponentManagement
  );

  return (
    <div>
      {countPage === 0 ? (
        <>
          <AboutProduct data={data} />
        </>
      ) : (
        <></>
      )}
      {countPage === 1 ? (
        <>
          <Details />
        </>
      ) : (
        <></>
      )}
      {countPage === 2 ? (
        <>
          <Specs data={data} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ComponentManagement;
