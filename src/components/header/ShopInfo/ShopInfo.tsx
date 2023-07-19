"use client";
import React from "react";

import "./ShopInfo.scss";
// next
import Image from "next/image";

// images
import arrowbottom from "../../../../public/images/header/arrow-bottom.svg";
import bx_bx_time from "../../../../public/images/time/bx_bx-time.svg";
import bx_bx_time_loction from "../../../../public/images/time/bx_bx-time-loction.svg";

function ShopInfo() {
  const [hidden, sethidden] = React.useState(true);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLButtonElement | HTMLImageElement>
  ) => {
    sethidden((e) => !e);
  };

  const btn = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.addEventListener("click", (event) => {
      if (event.target !== btn.current) {
        if (!hidden) {
          sethidden(true);
        }
      }
    });
  });

  return (
    <>
      <span ref={btn} onClick={handleClick} className="h-t-time-open-text">
        Mon-Thu: 9:00 AM - 5:30 PM
      </span>

      <span className="arrowbottom" onClick={handleClick}>
        <Image onClick={handleClick} src={arrowbottom} alt="arrowbottom" />
      </span>
      <div className={hidden ? "time-open display-none" : "time-open "}>
        <div className="shape-inst">
          <div className="open">
            <div>
              {" "}
              <Image src={bx_bx_time} alt="bx_bx-time" />{" "}
            </div>
            <div className="allDay">
              <div className="WeAre">We are open:</div>
              <div className="day">
                <span>Mon-Thu:</span>
                <span> 9:00 AM - 5:30 PM</span>
              </div>
              <div className="day">
                <span>Fr:</span>
                <span> 9:00 AM - 6:00 PM</span>
              </div>
              <div className="day">
                <span>Sat:</span>
                <span> 11:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <hr />
          <div className="Address-div">
            <div>
              <Image src={bx_bx_time_loction} alt="bx_bx_time_loction" />
            </div>
            <div className="Address">
              Address: 1234 Street Adress, City Address, 1234
            </div>
          </div>
          <span className="line"></span>
          <div className="Phones-Email">
            <div>
              <span>Phones:</span>
              <span> (00) 1234 5678</span>
            </div>
            <div>
              <span>E-mail:</span>
              <span> shop@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopInfo;