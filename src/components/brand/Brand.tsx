import Image from "next/image";
import React from "react";

// images
import img1 from "../../../public/images/Brand/1.png";
import img2 from "../../../public/images/Brand/2.png";
import img3 from "../../../public/images/Brand/3.png";
import img4 from "../../../public/images/Brand/4.png";
import img5 from "../../../public/images/Brand/5.png";
import img6 from "../../../public/images/Brand/6.png";
import img7 from "../../../public/images/Brand/7.png";
import Link from "next/link";

function Brand() {
  return (
    <>
      <Link href={"/Catalog/1"}>
        <Image src={img1} alt="" />
      </Link>{" "}
      <Link href={"/Catalog/1"}>
        <Image src={img2} alt="" />{" "}
      </Link>
      <Link href={"/Catalog/1"}>
        <Image src={img3} alt="" />
      </Link>
      <Link href={"/Catalog/1"}>
        <Image src={img4} alt="" />{" "}
      </Link>
      <Link href={"/Catalog/1"}>
        <Image src={img5} alt="" />
      </Link>
      <Link href={"/Catalog/1"}>
        <Image src={img6} alt="" />
      </Link>
      <Link href={"/Catalog/1"}>
        {" "}
        <Image src={img7} alt="" />
      </Link>
    </>
  );
}

export default Brand;
