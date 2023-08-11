"use client";
import Image from "next/image";
import React from "react";

// images
import Frame97 from "../../../../public/images/PageProduct/Frame 97.svg";
import Frame98 from "../../../../public/images/PageProduct/Frame 98.svg";
function Quantity() {
  const [count, setCount] = React.useState<number>(1);
  React.useEffect(() => {
    if (count < 1) {
      setCount(1);
    }
    
  }, [count]);
  return (
    <div className="Quantity">
      <input
        type="number"
        placeholder="1"
        value={count}
        onChange={(elem) => setCount(parseFloat(elem.currentTarget.value))}
      ></input>
      <div className="arrow">
        <Image
          src={Frame98}
          alt="+"
          onClick={() => {
            console.log("click");

            setCount((e) => e + 1);
          }}
        ></Image>
        <Image
          src={Frame97}
          alt="-"
          onClick={() => {
            if (count > 1) {
              setCount((e) => e - 1);
            }
          }}
        ></Image>
      </div>
    </div>
  );
}

export default Quantity;
