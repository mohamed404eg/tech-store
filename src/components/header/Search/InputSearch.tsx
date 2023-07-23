"use client";

import Image from "next/image";
import React, { useState } from "react";
// images
import gg_search from "../../../../public/images/header/gg_search.svg";

// style
import "./InputSearch.scss";
function InputSearch() {
 
  return (
    <div className="InputSearch">
      <div>
        <input placeholder="Search entiere store here..."></input>
        <Image className="InputSearch-img display-none" src={gg_search} alt="gg_search" />
      </div>
    </div>
  );
}

export default InputSearch;
