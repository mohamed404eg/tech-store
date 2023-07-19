"use client";

import * as React from "react";

import "./MegaMenu.scss";
import Image from "next/image";
import Product from "@/components/product/Product";
import arrow from "../../../../public/images/mage/arrow.svg";
function MegaMenu() {
  const [hidden, setHidden] = React.useState(true);
  React.useEffect(() => {
    console.log(hidden);
  }, [hidden]);

  return (
    <div
      onMouseLeave={() => {
        //    setHidden(true);
      }}
    >
      <span
        style={{ zIndex: 10, position: "relative" }}
        onMouseEnter={() => {
          setHidden(false);
        }}
        className="LaptopsText"
      >
        Laptops
      </span>

      <div className={hidden ? "MegaMenu  display-none" : "MegaMenu container"}>
        <div className="content-MegaMenu">
          <div className="content-one">
            <div className="list">
              {" "}
              <div>
                Everyday Use Notebooks{" "}
                <span className="arrow">
                  <Image src={arrow} alt="arrow" />
                </span>
              </div>
              <div>
                MSI Workstation Series{" "}
                <span className="arrow">
                  <Image src={arrow} alt="arrow" />
                </span>
              </div>
              <div>MSI Prestige Series</div>
              <div>Gaming Notebooks</div>
              <div>Tablets And Pads</div>
              <div>Netbooks</div>
              <div>Infinity Gaming Notebooks</div>
            </div>

            <div className="ListProduct">
              <Product />
              <Product />
              <Product />
              <Product />
             
            </div>
          </div>
          <div className="content-tow">brand</div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
