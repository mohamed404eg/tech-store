
import React, { useId, useRef } from "react";
import Input from "./input/Input";
import { rendomId } from "@/hooks/rendomId";

function Part0() {
  const id0 = rendomId();
  const id1 = rendomId();
  const id2 = rendomId();

  return (
    <div className="SelectSection">
      <div>
        <Input id={id0} numComp={0} name="Primar" />

        <label htmlFor={id0}>About Product</label>
      </div>
      <div>
        <Input id={id1} numComp={1} />
        <label htmlFor={id1}>Details</label>
      </div>
      <div>
        {" "}
        <Input id={id2} numComp={2} />
        <label htmlFor={id2}>Specs</label>
      </div>
    </div>
  );
}

export default Part0;
