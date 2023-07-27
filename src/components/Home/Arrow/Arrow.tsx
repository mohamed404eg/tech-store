"use client";

import Image from "next/image";
import React from "react";

type ArrowType = {
  x: "left" | "right";
};

// images
import ArrowLeft from "../../../../public/images/Home/SectionWelcome/ArrowLeft.svg";
import ArrowRight from "../../../../public/images/Home/SectionWelcome/ArrowRight.svg";
function Arrow({ x }: ArrowType) {
  const handleImageClickRight = () => {
    let i = 0;
    let num = 1;
    let numIst = 0;
    let loop = 0;
    const all = document.querySelector(".WelcomeImgAll")?.childNodes;
    all?.forEach((elem) => {
      loop++;
      if (
        elem instanceof HTMLElement &&
        elem.classList.contains("WelcomeImgPrimary")
      ) {
        if (all.length !== loop) {
          i++;
        } else {
          i = 0;
        }
        elem.classList.remove("WelcomeImgPrimary");
        elem.classList.add("WelcomeImgPrimaryNone");
      } else {
        num++;
        if (elem instanceof HTMLElement && i !== 0) {
          elem.classList.add("WelcomeImgPrimary");
          i = 0;
        } else {
        }
      }
    });

    if (i !== 1) {
      const allInst = document.querySelector(".WelcomeImgAll")?.childNodes;
      allInst?.forEach((elemInst) => {
        if (
          elemInst instanceof HTMLElement &&
          elemInst.classList.contains("WelcomeImgPrimary")
        ) {
          numIst = 0;
        } else {
          numIst++;
        }
      });
      if (numIst === allInst?.length) {
        if (allInst[0] instanceof HTMLElement) {
          allInst[0].classList.add("WelcomeImgPrimary");
        }
      }
    }
  };
  const handleImageClickLeft = () => {
    const all = document.querySelector(".WelcomeImgAll")?.childNodes;
    let last: number = 0;
    for (let i = 0; i <= all!.length; i++) {
      if (
        (all![i] as HTMLElement) instanceof HTMLElement &&
        (all![i] as HTMLElement)?.classList.contains("WelcomeImgPrimary")
      ) {
        const as = all as NodeListOf<ChildNode>;

        (as[i] as HTMLElement)?.classList?.remove("WelcomeImgPrimary");
        (as[i] as HTMLElement)?.classList?.add("WelcomeImgPrimaryNone");

        if (i - 1 === -1) {
          last = 1;
        } else {
          (as[i - 1] as HTMLElement)?.classList?.add("WelcomeImgPrimary");
        }
      }

      if (last === 1) {
        if (i === all?.length) {
          (all[i - 1] as HTMLElement)?.classList?.add("WelcomeImgPrimary");

          last = 0;
        }
      }
    }
  };
  return (
    <>
      <Image
        onClick={x === "right" ? handleImageClickRight : handleImageClickLeft}
        src={x === "left" ? ArrowLeft : ArrowRight}
        alt="Arrow"
        className={x}
      />
    </>
  );
}

export default Arrow;
