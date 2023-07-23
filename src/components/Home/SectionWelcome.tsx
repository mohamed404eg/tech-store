import React from "react";

import "./SectionWelcome.scss";
import Image from "next/image";

// images
import SectionWelcomeImg from "../../../public/images/Home/SectionWelcome/SectionWelcome.png";
import Arrow from "./Arrow/Arrow";
function SectionWelcome() {
  return (
    <div className="SectionWelcome container">
      <Arrow x="left" />

      <Image src={SectionWelcomeImg} alt="img"  className="SectionWelcomeImg"/>

      <Arrow x="right" />
    </div>
  );
}

export default SectionWelcome;
