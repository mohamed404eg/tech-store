import React from "react";

import "./AboutProduct.scss";
import ProductColor from "./ProductColor/ProductColor";
import Link from "next/link";
function AboutProduct() {
  return (
    <div className="AboutProduct">
      <div className="Breadcrumbs">
        <span className="dir">Home</span>
        <span className="arrow">›</span>
        <span className="dir">Laptops</span>
        <span className="arrow">›</span>
        <span className="dir"> MSI WS Series</span>
      </div>
      <div className="AboutProductBody">
        <h1>MSI MPG Trident 3</h1>
        <span className="firstReview">Be the first to review this product</span>
        <p className="desc">
          MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
          512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
          Warranty Gaming Desktop
        </p>

        <div className="collectionProductColor">

          <ProductColor />
          <ProductColor />
          <ProductColor />
        </div>
        <div className="ContactCatogry">
          <div className="Contact">Have a Question? <Link href={"#"}>Contact Us</Link></div>
          <div className="Catogry">SKU D5515AI</div>
        </div>
      </div>

      <span className="MoreInformation">+ <span>More information</span></span>
    </div>
  );
}

export default AboutProduct;
