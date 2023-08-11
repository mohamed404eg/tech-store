import React from "react";

import "./AboutProduct.scss";
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
      <div>
        <h1>MSI MPG Trident 3</h1>
        <span>Be the first to review this product</span>
        <p>
          MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
          512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
          Warranty Gaming Desktop
        </p>

        <div>color</div>
        <div>
          <div>Have a Question? Contact Us</div>
          <div>SKU D5515AI</div>
        </div>
      </div>

      <span>+ More information</span>
    </div>
  );
}

export default AboutProduct;
