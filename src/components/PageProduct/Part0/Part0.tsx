import React from "react";
import Input from "./input/Input";

function Part0() {
  return (
    <div className="SelectSection">
      <div>
        <Input id="AboutProduct" DefaultChecked={"defaultChecked"} numComp={0} />

        <label htmlFor="AboutProduct">About Product</label>
      </div>
      <div>
        <Input id="Details" numComp={1} />
        <label htmlFor="Details">Details</label>
      </div>
      <div>
        {" "}
        <Input id="Specs" numComp={2} />
        <label htmlFor="Specs">Specs</label>
      </div>
    </div>
  );
}

export default Part0;
