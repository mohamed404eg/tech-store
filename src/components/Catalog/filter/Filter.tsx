import React from "react";

import "./Filter.scss";
import ListDropdown from "../ListDropdown/ListDropdown";
import ListDropdownColor from "../ListDropdownColor/ListDropdownColor";
import ListDropdownFilterName from "../ListDropdownFilterName/ListDropdownFilterName";
import Image from "next/image";

// images
import image33 from "../../../../public/images/Catalog/Brands/image 33.svg";
import image49 from "../../../../public/images/Catalog/image 49.jpg";
function Filter() {
  return (
    <>
      <div className="Back">
        <button>‹ Back</button>
      </div>
      <div className="Filter-part01">
        <h3>Filters</h3>
        <button className="ClearFilter">Clear Filter</button>
        <ListDropdown
          title="Category"
          data={[
            { id: 1, price: "CUSTOM PCS", q: 19 },
            { id: 2, price: "MSI ALL-IN-ONE PCS", q: 13 },
            { id: 3, price: "HP/COMPAQ PCS", q: 132 },
          ]}
        />
        <ListDropdown
          title="Price"
          data={[
            { id: 1, price: "$0.00 - $1,000.00", q: 19 },
            { id: 2, price: "$1,000.00 - $2,000.00", q: 13 },
            { id: 3, price: "$2,000.00 - $3,000.00", q: 132 },
            { id: 4, price: "$4,000.00 - $5,000.00", q: 53 },
            { id: 5, price: "$7,000.00 And Above", q: 1345 },
          ]}
        />
        <ListDropdownColor
          title="Color"
          data={[
            { id: 1, Color: "red" },
            { id: 2, Color: "black" },
            { id: 3, Color: "blue" },
          ]}
        />
        <ListDropdownFilterName
          title="Filter Name"
          data={[
            { id: 1, key: "a" },
            { id: 2, key: "b" },
            { id: 3, key: "c" },
          ]}
        />
        <button type="button" className="ApplyFilters">
          Apply Filters (2)
        </button>
      </div>
      <div className="FilterBrands">
        <div className="Brands-title-btn">
          <h3>Brands</h3>
          <button>Brands</button>
        </div>
        <div className="BrandsImages">
          <Image src={image33} alt=""></Image>
          <Image src={image33} alt=""></Image>
          <Image src={image33} alt=""></Image>
          <Image src={image33} alt=""></Image>
          <Image src={image33} alt=""></Image>
          <Image src={image33} alt=""></Image>
        </div>
      </div>

      <div className="CompareProducts">
        <h3>Compare Products</h3>
        <p>You have no items to compare.</p>
      </div>
      <div className="MyWishList">
        <h3>My Wish List</h3>
        <p>You have no items in your wish list.</p>
      </div>

      <div className="ProductSuggested">
        <Image src={image49} alt="Product Suggested for you"></Image>
      </div>
    </>
  );
}

export default Filter;
