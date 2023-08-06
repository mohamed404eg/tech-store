import Image from "next/image";
import React from "react";

import image from "../../../public/images/Home/HomeNews/image 29.jpg";
function CopNews() {
  return (
    <div className="CopNews">
      <Image src={image} alt="image"></Image>
      <p className="desc">
        If you’ve recently made a desktop PC or laptop purchase, you might want
        to consider adding peripherals to enhance your home office setup, your
        gaming rig, or your business workspace...
      </p>
      <p className="time">01.09.2020</p>
    </div>
  );
}

export default CopNews;
