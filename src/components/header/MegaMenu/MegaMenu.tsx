"use client";

import * as React from "react";

import "./MegaMenu.scss";
import Image from "next/image";
import Product from "@/components/product/Product";
import arrow from "../../../../public/images/mage/arrow.svg";
import Brand from "../../brand/Brand";
import axios from "axios";
import Link from "next/link";
import { fetchApiMegaMenu } from "@/types";
import { rendomId } from "@/hooks/rendomId";
import { type } from "os";

function MegaMenu() {
  const [hidden, setHidden] = React.useState(false);

  const [subCategoryHidden, setSubCategoryHidden] = React.useState(false);
  const [subCategoryHidden2, setSubCategoryHidden2] = React.useState(false);

  const [fetchData, setfetchData] = React.useState<fetchApiMegaMenu>();
  // get data api
  React.useEffect(() => {
    axios(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}mega-menus?populate=mega_menu_dropdowns.mega_menu_dropdown_subs`
    ).then((res) => setfetchData(res.data));
  }, []);
  React.useEffect(() => {
    // console.log(fetchData);
  }, [fetchData]);

  // ==get data api==

  type RusltfilterDropdownOneProps = {
    id: number;
    attributes: {
      text: string;
      href: string;
      dropdown: boolean;
      mega_menu_dropdown_subs?: {
        data: [];
      };
    };
  };
  const RusltfilterDropdownOne: RusltfilterDropdownOneProps[] = [];
  const filterDropdownOne = fetchData?.data?.filter((v) => {
    if (v.attributes?.dropdown === true) {
      return v.attributes?.mega_menu_dropdowns.data.filter(
        (r: RusltfilterDropdownOneProps) => {
          RusltfilterDropdownOne.push(r);
        }
      );
    } else {
      return false;
    }
  });
  const RusltfilterDropdownTow: any[] = [];
  const filterDropdownTow = RusltfilterDropdownOne?.filter((v) => {
    if (v.attributes?.dropdown === true) {
      return v.attributes?.mega_menu_dropdown_subs?.data.filter((r: any) => {
        //    console.log(r);
        RusltfilterDropdownTow.push(r);
      });
    } else {
      return false;
    }
  });

  return (
    <div
    // onMouseLeave={() => {
    //   setHidden(true);
    // }}
    >
      <span
        style={{ zIndex: 10, position: "relative" }}
        onMouseEnter={() => {
          setHidden(false);
        }}
        className="LaptopsText"
      >
        <Link href={"/Catalog/1"}>Laptops</Link>
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
              {fetchData?.data?.map((value) => (
                <div
                  key={rendomId()}
                  onMouseEnter={() => {
                    setSubCategoryHidden(false);
                  }}
                >
                  <span key={rendomId()}>{value.attributes.text}</span>
                  {value.attributes.dropdown ? (
                    <span className="arrow" key={rendomId()}>
                      <Image src={arrow} alt="arrow" />
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              ))}
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
                    // onMouseLeave={() => {
                    //   setTimeout(() => {
                    //     if (subCategoryHidden2) {
                    //       setSubCategoryHidden(true);
                    //     }
                    //   }, 1000);
                    // }}
                  >
                    {}
                    {RusltfilterDropdownOne?.map((value) => (
                      <div key={value.id}>
                        {value.attributes?.text}
                        <span className="arrow">
                          <Image src={arrow} alt="arrow" />
                        </span>
                      </div>
                    ))}
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
                      {RusltfilterDropdownTow?.map((value) => (
                        <Link href={""} key={rendomId()}>
                          {value.attributes.text}
                          <span className="count">
                            {" "}
                            ({value.attributes.count})
                          </span>
                        </Link>
                      ))}
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
