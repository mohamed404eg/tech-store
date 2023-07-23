import React from "react";

import "./SectionWelcome.scss";
import Image from "next/image";

// images
import SectionWelcomeImg from "../../../public/images/Home/SectionWelcome/SectionWelcome.png";
import SectionWelcome728px from "../../../public/images/Home/SectionWelcome/SectionWelcome728px.png";
import SectionWelcome375px from "../../../public/images/Home/SectionWelcome/SectionWelcome375px.png";
import Arrow from "./Arrow/Arrow";

import images from "../../data/WelcomeImg.json";
function SectionWelcome() {
  return (
    <>
      <div className="SectionWelcomeTop container">
        <div className="SectionWelcome">
          <Arrow x="left" />
          {/* <picture>
            {}
            <source
              media="(max-width: 728px)"
              srcSet={`${SectionWelcome728px.src}`}
            />
            <source
              media="(max-width: 375px)"
              srcSet={`${SectionWelcome375px.src}`}
            />

            <Image
              src={SectionWelcomeImg}
              alt="img"
              className="SectionWelcomeImg"
            />
          </picture> */}

          {images.map((data) => {
            return (
              <>
                <picture
                  key={data.id}
                  className={data?.Primary ? "WelcomeImgPrimary" : ""}
                >
                  {}
                  <source
                    media="(max-width: 728px)"
                    srcSet={`${data?.url728px || data.url}`}
                  />
                  <source
                    media="(max-width: 375px)"
                    srcSet={`${data?.url728px || data.url}`}
                  />

                  <Image
                    src={data.url}
                    alt="img"
                    className="SectionWelcomeImg"
                    width={100}
                    height={100}
                  />
                </picture>
              </>
            );
          })}
          <Arrow x="right" />
        </div>
      </div>
    </>
  );
}

export default SectionWelcome;
