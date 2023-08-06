"use client";

import * as React from "react";

import "./MegaMenu.scss";
import Image from "next/image";
import Product from "@/components/product/Product";
import arrow from "../../../../public/images/mage/arrow.svg";
import Brand from "../../brand/Brand";
function MegaMenu() {
  const [hidden, setHidden] = React.useState(true);

  const [subCategoryHidden, setSubCategoryHidden] = React.useState(true);
  const [subCategoryHidden2, setSubCategoryHidden2] = React.useState(true);

  return (
    <div
      onMouseLeave={() => {
        setHidden(true);
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

      <div
        className={
          hidden ? "MegaMenu  display-none container" : "MegaMenu container"
        }
      >
        <div className="content-MegaMenu ">
          <div className="content-one">
            <div className="list">
              {" "}
              <div
                onMouseEnter={() => {
                  setSubCategoryHidden(false);
                }}
              >
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
              <div
                onMouseEnter={() => {
                  setSubCategoryHidden(true);
                }}
              >
                MSI Prestige Series
              </div>
              <div
                onMouseEnter={() => {
                  setSubCategoryHidden(true);
                }}
              >
                Gaming Notebooks
              </div>
              <div
                onMouseEnter={() => {
                  setSubCategoryHidden(true);
                }}
              >
                {" "}
                Tablets And Pads
              </div>
              <div
                onMouseEnter={() => {
                  setSubCategoryHidden(true);
                }}
              >
                Netbooks
              </div>
              <div
                onMouseEnter={() => {
                  setSubCategoryHidden(true);
                }}
              >
                Infinity Gaming Notebooks
              </div>
            </div>

            <div className="ListProduct">
              {subCategoryHidden ? (
                <>
                  {" "}
                  <Product />
                  <Product />
                </>
              ) : (
                <>
                  <div
                    className="list SubCategory "
                    onMouseLeave={() => {
                      setTimeout(() => {
                        if (subCategoryHidden2) {
                          setSubCategoryHidden(true);
                        }
                      }, 1000);
                    }}
                  >
                    {" "}
                    <div>
                      MSI Workstation Series
                      <span className="arrow">
                        <Image src={arrow} alt="arrow" />
                      </span>
                    </div>
                    <div>MSI Prestige Series</div>
                  </div>

                  <>
                    {" "}
                    <div
                      className="list SubCategory2"
                      onMouseEnter={() => {
                        setSubCategoryHidden2(false);
                        setSubCategoryHidden(false);
                      }}
                      onMouseLeave={() => {
                        setSubCategoryHidden2(true);
                      }}
                    >
                      {" "}
                      <div>
                        MSI WS Series <span className="count"> (12)</span>{" "}
                      </div>
                      <div>
                        MSI WT Series <span className="count"> (31)</span>
                      </div>
                      <div>
                        MSI WE Series <span className="count"> (7)</span>
                      </div>
                    </div>
                  </>
                </>
              )}{" "}
              <Product />
              <Product />
            </div>
          </div>
          <div className="content-tow">
            <Brand />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
