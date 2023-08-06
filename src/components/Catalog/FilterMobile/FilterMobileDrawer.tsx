"use client";
import React from "react";

import "./FilterMobileDrawer.scss";
import Image from "next/image";

import Frame108 from "../../../../public/images/Catalog/FilterMobileDrawer/Frame 108.svg";
import Filter from "../filter/Filter";

function FilterMobileDrawer() {
  function handleFilterMobileDrawer() {
    const ele = document.querySelector(".FilterMobileDrawer");
    const body = document.querySelector("body");
    if (ele?.classList.contains("FilterMobileDrawerClose")) {
      ele?.classList.add("FilterMobileDrawerOpen");
      ele?.classList.remove("FilterMobileDrawerClose");
    } else {
      ele?.classList.add("FilterMobileDrawerClose");
      ele?.classList.remove("FilterMobileDrawerOpen");
      body!.style.overflow = "auto";
    }
  }

  return (
    <div className="FilterMobileDrawer FilterMobileDrawerOpen">
      <div className="FilterMobileDrawer-item-1">
        <h3>Filter By</h3>
        <Image
          src={Frame108}
          alt="Frame108"
          onClick={handleFilterMobileDrawer}
        ></Image>
      </div>
      <hr className="HrFilterMobileDrawer-item-1" />
      <div className="FilterMobileDrawer-item-2">
        <Filter />
      </div>
    </div>
  );
}

export default FilterMobileDrawer;
