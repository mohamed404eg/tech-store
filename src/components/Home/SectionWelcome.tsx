import React from "react";

import "./SectionWelcome.scss";
import Image from "next/image";

// images
import SectionWelcomeImg from "../../../public/images/Home/SectionWelcome/SectionWelcome.png";
import SectionWelcome728px from "../../../public/images/Home/SectionWelcome/SectionWelcome728px.png";
import SectionWelcome375px from "../../../public/images/Home/SectionWelcome/SectionWelcome375px.png";
import Arrow from "./Arrow/Arrow";

import images from "../../data/WelcomeImg.json";
import Link from "next/link";
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
          <Link href={"/Catalog/1"} className="WelcomeImgAll">
            {images.map((data) => {
              return (
                <>
                  <picture
                    key={data.id}
                    className={
                      data?.Primary
                        ? "WelcomeImgPrimary"
                        : "WelcomeImgPrimaryNone"
                    }
                  >
                    {}
                    <source media="(max-width: 728px)" srcSet={`${data.url}`} />
                    <source media="(max-width: 375px)" srcSet={`${data.url}`} />

                    <Image
                      src={data.url}
                      alt="img"
                      className="SectionWelcomeImg"
                      width={1398}
                      height={100}
                    />
                  </picture>
                </>
              );
            })}
          </Link>
          <Arrow x="right" />
        </div>
      </div>
    </>
  );
}

export default SectionWelcome;
