import Image from "next/image";
import React from "react";


import Group114 from "../../../../public/images/PageProduct/Group 114.svg"
function Action() {
  return <div className="productAction">
    
    <button className="AddtoCart">Add to Cart</button>
    <button className="paypal"><Image src={Group114} alt="paypal"></Image></button>
  </div>;
}

export default Action;
