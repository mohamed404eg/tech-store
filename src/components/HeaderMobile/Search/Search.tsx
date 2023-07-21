import React from "react";
import "./Search.scss";

// IMAGES
import IconSearch from "../../../../public/images/HeaderMobile/SearchHere.svg";
import Image from "next/image";
function Search() {
  return (
    <div className="mobile-Search">
      <Image src={IconSearch} alt="IconSearch" />
      <input type="text" placeholder="Search here" />
    </div>
  );
}

export default Search;
