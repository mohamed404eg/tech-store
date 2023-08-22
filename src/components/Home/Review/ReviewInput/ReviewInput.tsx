"use client";
import React, { useState } from "react";

function ReviewInput() {
  const [num, setNum] = useState({
    rev1: true,
    rev2: false,
    rev3: false,
  });

  const handleFun = (
    value: "rev1" | "rev2" | "rev3",
    eve?: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (eve?.target as HTMLInputElement) {
      setNum(
        (a) =>
          (a = { rev1: false, rev2: false, rev3: false, [value]: !num[value] })
      );
    }
  };

  React.useEffect(() => {
    const ReviewSwitch = document.querySelector(".ReviewSwitch");
    const ReviewSwitchP = ReviewSwitch?.querySelector("p");
    console.log(ReviewSwitchP?.offsetWidth);

    if (num.rev1 === true) {
      ReviewSwitch?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else if (num.rev2 === true) {
      ReviewSwitch?.scrollTo({
        left: ReviewSwitchP?.offsetWidth,
        behavior: "smooth",
      });
    } else if (num.rev3 === true) {
      ReviewSwitch?.scrollTo({
        left: ReviewSwitchP!.offsetWidth * 2,
        behavior: "smooth",
      });
    }
  }, [num]);
  return (
    <div className="ReviewInput">
      <div>
        <input
          type="radio"
          name=""
          id="one"
          onChange={(e) => handleFun("rev1", e)}
          checked={num.rev1}
        />
        <label htmlFor="one"></label>
      </div>
      <div>
        <input
          type="radio"
          name=""
          id="tow"
          onChange={(e) => handleFun("rev2", e)}
          checked={num.rev2}
        />
        <label htmlFor="tow"></label>
      </div>
      <div>
        <input
          type="radio"
          name=""
          id="there"
          onChange={(e) => handleFun("rev3", e)}
          checked={num.rev3}
        />
        <label htmlFor="there"></label>
      </div>
    </div>
  );
}

export default ReviewInput;
