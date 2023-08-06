"use client";
import React, { LegacyRef, MutableRefObject, useEffect, useRef } from "react";

import ScrollBackImage from "../../../public/images/Scroll Back/ScrollBack.svg";
import messenger from "../../../public/images/Scroll Back/messenger.svg";
import "./ScrollBack.scss";
import Image from "next/image";
import Link from "next/link";
function ScrollBack() {
  const ScrollBackEle = useRef<HTMLDivElement>(null);
  const ScrollBackEleImage = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const homeAds = document.querySelector(".HomeAds");

      if (homeAds !== null) {
        if (homeAds?.getBoundingClientRect()?.top < 630) {
        

          if (ScrollBackEle.current instanceof HTMLDivElement) {
            ScrollBackEle.current.style.visibility = "visible";
          }
        } else {
          if (ScrollBackEle.current instanceof HTMLDivElement) {
            ScrollBackEle.current.style.visibility = "hidden";
          }
        }
      }
    });
    ScrollBackEleImage.current?.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div className="ScrollBack" ref={ScrollBackEle}>
      <Image
        ref={ScrollBackEleImage}
        src={ScrollBackImage}
        alt="ScrollBackImage"
      ></Image>
      <Link href={""}>
        <Image src={messenger} alt=""></Image>
      </Link>
    </div>
  );
}

export default ScrollBack;
