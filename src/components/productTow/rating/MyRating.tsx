import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { type } from "os";

type MyRatingProps = {
  value: null | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
  // should be between 0 and 5
};
import "./MyRating.scss"
export default function MyRating({ value = null }: MyRatingProps) {
  return (
    <Box className="MyRating">
      <Rating
        style={{ color: "#E9A426"}}
        name="rating-product"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.55, color: "#C4C4C4" }}
            fontSize="inherit"
          />
        }
      />
      <div className="Reviews">Reviews ({value})</div>
    </Box>
  );
}
