"use client";
import React from "react";

import "./ListDropdownColor.scss";

type ListDropdownType = {
  title: string;
  data: { id: number; Color: string }[];
};
import Frame98 from "../../../../public/images/Catalog/Frame 98.svg";
import Image from "next/image";

function ListDropdownColor({ title, data }: ListDropdownType) {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="ListDropdownColor">
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
                <input
                  style={{ background: ele.Color }}
                  type="checkbox"
                  name=""
                  id=""
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

export default ListDropdownColor;
