"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// images
import gg_search from "../../../../public/images/header/gg_search.svg";
import gg_search_close from "../../../../public/images/header/gg_search_close.svg";

function Search() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    console.log("increment like count");

    document
      .querySelector(".header-second-list")
      ?.classList.toggle("display-none");
      
    document.querySelector(".InputSearch")?.classList.toggle("display-flex");

    setOpen((v) => !v);
  }

  return (
    <>
      <Image
        className="clientImg"
        onClick={(e) => handleClick()}
        src={open ? gg_search_close : gg_search}
        alt="gg_search"
      />
    </>
  );
}

export default Search;
