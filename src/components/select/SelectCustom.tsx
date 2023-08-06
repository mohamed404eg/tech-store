"use client";
import React from "react";
import Frame97 from "../../../public/images/Catalog/Frame97.svg";
import Image from "next/image";

import "./SelectCustom.scss";
type SelectCustomType = {
  contentBefore: string;
  option: { id: string | number; name: string | number }[];
  classNamed?: string;
};

function SelectCustom({ contentBefore, option, classNamed }: SelectCustomType) {
  const [open, seOpen] = React.useState(false);
  return (
    <div className={`SortBy   ${classNamed}`}>
      <span
        className="contentBefore"
        onClick={() => {
          const SelectCustom: HTMLSelectElement | null =
            document.querySelector(".SelectCustom");

          SelectCustom?.focus();
        }}
      >
        {contentBefore}
      </span>
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
  );
}

export default SelectCustom;
