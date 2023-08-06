"use client";

import React from "react";
import FilterMobileDrawer from "./FilterMobileDrawer";

function FilterMobile() {
  function handleFilterMobileDrawer() {
    const ele = document.querySelector(".FilterMobileDrawer");
    const body = document.querySelector("body");

    if (ele?.classList.contains("FilterMobileDrawerClose")) {
      ele?.classList.add("FilterMobileDrawerOpen");
      ele?.classList.remove("FilterMobileDrawerClose");
      body!.style.overflow = "hidden";
    } else {
      ele?.classList.add("FilterMobileDrawerClose");
      ele?.classList.remove("FilterMobileDrawerOpen");
      body!.style.overflow = "auto";
    }
  }
  return (
    <>
      <button type="button" onClick={handleFilterMobileDrawer}>
        Filter
      </button>
    </>
  );
}

export default FilterMobile;
