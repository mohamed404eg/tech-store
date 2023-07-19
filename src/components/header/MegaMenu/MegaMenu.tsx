"use client";

import * as React from "react";

import "./MegaMenu.scss";
function MegaMenu() {
  const [hidden, setHidden] = React.useState(true);
  React.useEffect(() => {
    console.log(hidden);
  }, [hidden]);

  return (
    <div
      onMouseLeave={() => {
        setHidden(true);
      }}
    >
      <span
        style={{ zIndex: 10, position: "relative" }}
        onMouseEnter={() => {
          setHidden(false);
        }}
      >
        Laptops
      </span>

      <div className={hidden ? "MegaMenu  display-none" : "MegaMenu container"}>
        <div className="content-MegaMenu"></div>
      </div>
    </div>
  );
}

export default MegaMenu;
