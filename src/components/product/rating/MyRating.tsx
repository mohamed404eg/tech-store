import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { type } from "os";

import StarFull from "../../../../public/images/MyRating/StarFull.svg";
import StarUnFull from "../../../../public/images/MyRating/StarUnFull.svg";
type MyRatingProps = {
  value: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  // should be between 0 and 5
};
import "./MyRating.scss";
import Image from "next/image";
import { rendomId } from "@/hooks/rendomId";
export default function MyRating({ value = 0 }: MyRatingProps) {
  const ArrayStar = [];

  for (let i = 0; i < value; i++) {
    ArrayStar.push("Full");
  }

  const munsValue = 5 - value;


  for (let i = 0; i < munsValue; i++) {
    ArrayStar.push("UnFull");
  }

  return (
    <div className="MyRating">
      <div className="MyStar">
        {ArrayStar.map((v) =>
          v === "Full" ? (
            <Image key={rendomId()} src={StarFull} alt="StarFull"></Image>
          ) : (
            <Image key={rendomId()} src={StarUnFull} alt="StarFull"></Image>
          )
        )}
      </div>

      <div className="Reviews">Reviews ({value})</div>
    </div>
  );
}
