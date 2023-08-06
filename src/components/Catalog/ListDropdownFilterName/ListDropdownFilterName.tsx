"use client";
import React from "react";

import "./ListDropdownFilterName.scss";

type ListDropdownType = {
  title: string;
  data: { id: number; key: string }[];
};
import Frame98 from "../../../../public/images/Catalog/Frame 98.svg";
import Image from "next/image";

function ListDropdownFilterName({ title, data }: ListDropdownType) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="ListDropdownFilterName">
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
          <div>
            {data.map((ele) => (
              <div key={ele.id} className="ListDropdownColorInputBorder">
                <label htmlFor={`${ele.key}-ListDropdownFilterName`}>{ele.key}</label>
                <input
                  type="checkbox"
                  name={ele.key}
                  id={`${ele.key}-ListDropdownFilterName`}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListDropdownFilterName;
