import React from "react";

import "./custompage.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

import imageArrow from "../../../../public/images/custompage/imageArrow.svg";
import DivLInkGo from "@/components/custompage/DivLInkGo";
let data = [
  {
    dir: "Home",
    href: "#",
    id: 1,
  },
  {
    dir: "Blog",
    href: "#",
    dirCurrent: true,
    id: 2,
  },
];
async function page({ params }: { params: { id: string } }) {
  const getApi = await fetch(`http://127.0.0.1:1337/api/blogs/${params.id}`);
  const dataApi = await getApi.json();

  console.log(dataApi);

  return (
    <div className="container custompage">
      {" "}
      <div className="">
        <Breadcrumbs data={data} />
      </div>
      <h1>{dataApi.data.attributes.title}</h1>
      <div className="contentTopSlider">
        <div>
          <div className="descShort">
            GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
          </div>
          <article>{dataApi.data.attributes.body}</article>
        </div>
        <DivLInkGo />
      </div>
    </div>
  );
}

export default page;
