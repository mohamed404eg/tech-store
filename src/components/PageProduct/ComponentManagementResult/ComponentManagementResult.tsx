import React from "react";

import "./ComponentManagementResult.scss";
import Link from "next/link";
import ComponentManagement from "../ComponentManagement/ComponentManagement";
import AboutProduct from "../AboutProduct/AboutProduct";
function ComponentManagementResult({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="ComponentManagementResult">
      <div className="Breadcrumbs">
        <span className="dir">Home</span>
        <span className="arrow">›</span>
        <span className="dir">Laptops</span>
        <span className="arrow">›</span>
        <span className="dir"> MSI WS Series</span>
      </div>

      <div></div>
      <div className="ComponentManagementResultBody">
     {children}

        <div className="ContactCatogry">
          <div className="Contact">
            Have a Question? <Link href={"#"}>Contact Us</Link>
          </div>
          <div className="Catogry">SKU D5515AI</div>
        </div>
      </div>

      <span className="MoreInformation">
        + <span>More information</span>
      </span>
    </div>
  );
}

export default ComponentManagementResult;
