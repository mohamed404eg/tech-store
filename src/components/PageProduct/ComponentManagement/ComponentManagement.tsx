"use client";

import React, { useState } from "react";
import AboutProduct from "../AboutProduct/AboutProduct";
import Details from "../Details/Details";
import Specs from "../MySpecs/Specs";
import { useSelector } from "react-redux";
import { ComponentManagementState } from "@/Redux/Slice/PageProductComponentManagement/ComponentManagementSlice";

function ComponentManagement() {
  const countPage = useSelector(
    (state: {
      ComponentManagement: {
        ViewComponentManagement: number;
      };
    }) => state.ComponentManagement.ViewComponentManagement
  );

  return (
    <div >
      {countPage === 0 ? (
        <>
          <AboutProduct />
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
          <Specs />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ComponentManagement;
