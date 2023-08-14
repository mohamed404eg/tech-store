import React from "react";

import "./AboutProduct.scss";
import ProductColor from "./ProductColor/ProductColor";
import Link from "next/link";
import ComponentManagement from '../ComponentManagement/ComponentManagement';
import ComponentManagementResult from "../ComponentManagementResult/ComponentManagementResult";
function AboutProduct() {
  return (
  <ComponentManagementResult >


   
      <div className="AboutProductBody">
       
            <h1>MSI MPG Trident 3</h1>
            <span className="firstReview">
              Be the first to review this product
            </span>
            <p className="desc">
              MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB
              RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and
              Mouse 3 Years Warranty Gaming Desktop
            </p>

            <div className="collectionProductColor">
              <ProductColor />
              <ProductColor />
              <ProductColor />
            </div>
        

      
      </div>

      

  </ComponentManagementResult>
  );
}

export default AboutProduct;
