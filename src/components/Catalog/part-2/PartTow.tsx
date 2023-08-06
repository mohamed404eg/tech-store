"use client";
import Image from "next/image";
import React from "react";

import "./PartTow.scss";
import Group120 from "../../../../public/images/Catalog/Group 120.svg";
function PartTow() {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "CUSTOM PCS",
      total: 12,
    },
    {
      id: 2,
      name: "HP/COMPAQ PCS",
      total: 142,
    },
    {
      id: 3,
      name: "CUSTOM PCS",
      total: 42,
    },
  ]);
  return (
    <>
      <div className="PartTowAll">
        {data.map((ele) => (
          <div key={ele.id} className="PartTowSignal">
            <span>{ele.name}</span>
            <span>({ele.total})</span>
            <span>
              <Image src={Group120} alt=""></Image>
            </span>
          </div>
        ))}
      </div>
      <div className="PartTowClearAll">Clear All</div>
    </>
  );
}

export default PartTow;
