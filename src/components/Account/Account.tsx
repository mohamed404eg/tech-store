"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";

// images
import Personal from "../../../public/images/header/Personal.svg";
import iconMobile from "../../../public/images/HeaderMobile/iconMobile.svg";

function Account({
  isImage = true,
}: {
  isImage?: boolean | true;
}): React.JSX.Element {
  const [hidden, sethidden] = React.useState(true);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    sethidden((e) => !e);
  };

  const btn = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.addEventListener("click", (event) => {
      if (event.target !== btn.current) {
        if (!hidden) {
          sethidden(true);
        }
      }
    });
  });



  return (
    <div style={{ position: "relative" }} className="Account-Personal">
      <Button id="basic-button" aria-haspopup="true" onClick={handleClick}>
        <Image
          ref={btn}
          className="Personal"
          src={isImage ? Personal : iconMobile}
          alt="Personal"
        />
      </Button>
      <div
        className={hidden ? " Personal-list display-none " : " Personal-list  "}
      >
        <div className="shape-inst">
          <Link href={""}> My Account</Link>
          <Link href={""}>My Wish List (0)</Link>
          <Link href={""}>Compare (0)</Link>
          <Link href={""}>Create an Account</Link>
          <Link href={""}>Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
