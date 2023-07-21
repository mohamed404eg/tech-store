"use client";
import "./ChildrenModal.scss";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Theme, createStyles } from "@mui/material";

type ChildrenModalProps = {
  children: React.ReactNode;
  btn: React.ReactNode | string | number;
};
export default function ChildrenModal({
  children,
  btn,
}: ChildrenModalProps): React.JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        sx={{ display: "inline-block", padding: 0, minHeight: 0, minWidth: 0 }}
      >
        {btn}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        data-classname="MuiPopover"
      >
        <div className="triangle"></div>
        <div
          className="ChildrenModal-Popover"
          data-classname="ChildrenModal-Popover"
        >
          {children}
        </div>
      </Popover>
    </div>
  );
}
