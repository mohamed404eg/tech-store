import React from "react";
import "./ProductColor.scss";

type ProductColorPrpos = {
  id: number;
  colorCode: string;
};
function ProductColor({ colorCode, id }: ProductColorPrpos) {
  return (
    <div className="ProductColorInput">
      <input
        type="radio"
        name="ProductColor"
        value={id}
        style={{ backgroundColor: colorCode }}
      />
      <label htmlFor="ProductColor"></label>
    </div>
  );
}

export default ProductColor;
