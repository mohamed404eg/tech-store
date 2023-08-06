"use client";
import React from "react";

import "./ListDropdown.scss";

type ListDropdownType = {
  title: string;
  data: { id: number; price: number | string; q: number }[];
};
import Frame98 from "../../../../public/images/Catalog/Frame 98.svg";
import Image from "next/image";

function ListDropdown({ title, data }: ListDropdownType) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="ListDropdown">
      <div onClick={() => setOpen((e) => !e)}>
        <h3>{title}</h3>
        <span>
          <Image
            className={open ? "ListDropdownArrow" : ""}
            src={Frame98}
            alt="close-Open"
          ></Image>
        </span>
      </div>
      {open ? (
        <>
          {data.map((ele) => (
            <div key={ele.id}>
              <span>{ele.price}</span>
              <span>{ele.q}</span>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListDropdown;
