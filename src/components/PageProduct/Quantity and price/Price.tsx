import React from "react";

type ActionProps = {
  data: {
    id: string | number;
    Quantity: number;
    attributes: {
      afterdiscount: number;
      currentprice: number;
    };
  };
};
function Price({ data }: ActionProps) {
  console.log(data);

  return (
    <div className="Price">
      On Sale from{" "}
      <span>
        {data.attributes.afterdiscount
          ? data.attributes.afterdiscount + " $"
          : data.attributes.currentprice + " $"}
      </span>
    </div>
  );
}

export default Price;
