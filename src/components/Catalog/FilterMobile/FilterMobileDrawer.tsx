"use client";
import React from "react";

import "./FilterMobileDrawer.scss";
import Image from "next/image";

import Frame108 from "../../../../public/images/Catalog/FilterMobileDrawer/Frame 108.svg";
import Filter from "../filter/Filter";
import ListDropdown from "../ListDropdown/ListDropdown";

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
    <div className="FilterMobileDrawer FilterMobileDrawerClose">
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
        <Filter>
        <ListDropdown
          title="Brand"
          data={[
            { id: 1, price: "CUSTOM PCS", q: 19 },
            { id: 2, price: "MSI ALL-IN-ONE PCS", q: 13 },
            { id: 3, price: "HP/COMPAQ PCS", q: 132 },
          ]}
        />

        <button className="ApplyFiltersMobile">Apply Filters (2)</button>
        </Filter>

      </div>
    </div>
  );
}

export default FilterMobileDrawer;
