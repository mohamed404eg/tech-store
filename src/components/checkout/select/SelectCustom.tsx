"use client";
import React from "react";
import Frame97 from "../../../../public/images/Catalog/Frame97.svg";
import Image from "next/image";

import "./SelectCustom.scss";
import { rendomId } from "@/hooks/rendomId";
type SelectCustomType = {
  contentBefore: string;
  option: { id: string | number; name: string | number }[];
  classNamed?: string;
  label?: string;
  isrequired?: boolean;
};

function SelectCustom({
  contentBefore,
  option,
  classNamed,
  label,
  isrequired = false,
}: SelectCustomType) {
  const [open, seOpen] = React.useState(false);
  return (
    <>
      <span className="SelectCustomRequired">
        {label} {isrequired ? <span>*</span> : ""}
      </span>
      <div className={`SortBy   ${classNamed}`}>
        <select
          className="SelectCustom"
          onFocus={() => {
            seOpen(true);
            console.log("ok");
          }}
          onBlur={() => {
            seOpen(false);
          }}
          onChange={() => {
            seOpen(false);
          }}
          id={""}
        >
          {option.map((ele) => (
            <option key={ele.id} value={ele.id}>
              {ele.name}
            </option>
          ))}
        </select>
        <div className="selectArrowDiv">
          <Image
            className={open ? "selectArrow selectArrowRotate" : "selectArrow"}
            src={Frame97}
            alt="Frame97"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default SelectCustom;
