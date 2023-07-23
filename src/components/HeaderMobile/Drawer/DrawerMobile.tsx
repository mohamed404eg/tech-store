"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import ListSubheader from "@mui/material/ListSubheader";

import Collapse from "@mui/material/Collapse";

import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// images
import LogoBlue from "../../../../public/images/HeaderMobile/Logo-blue.svg";
import Close from "../../../../public/images/HeaderMobile/Close.svg";

// scss
import "./DrawerMobile.scss";
import Link from "next/link";
type toggleDrawerProps = (state: boolean) => void;
type DrawerProps = {
  children: React.ReactNode;
};
type handleClickProps = (id: string) => void;
export default function DrawerMobile({ children }: DrawerProps): JSX.Element {
  const [state, setState] = React.useState(false);

  const toggleDrawer: toggleDrawerProps = (state) => {
    setState(state);
  };
  type OpenState = {
    li1: boolean;
    li2: boolean;
    li3: boolean;
    li4: boolean;
    li5: boolean;
    li6: boolean;
    li7: boolean;
    [key: string]: boolean;
  };

  const [open, setOpen] = React.useState<OpenState>({
    li1: false,
    li2: false,
    li3: false,
    li4: false,
    li5: false,
    li6: false,
    li7: false,
  });

  const handleClick: handleClickProps = (id) => {
    setOpen((e) => ({ ...e, [id]: !e[id] } as const));
  };

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button
          href=""
          onClick={() => {
            toggleDrawer(true);
          }}
        >
          {children}
        </Button>
        <Drawer
          anchor="left"
          open={state}
          onClose={() => {
            toggleDrawer(false);
          }}
        >
          <Box
            sx={{ width: { xs: "90vw", sm: "56vw" } }}
            role="presentation"
            onClick={() => {
              // not active is close Drawer in click any location
              // toggleDrawer(false);
            }}
            onKeyDown={() => {
              toggleDrawer(false);
            }}
            component={"div"}
          >
            <div className="DrawerMobile-one">
              <span>
                <Image src={LogoBlue} alt="" />
              </span>
              <span>
                <Image
                  src={Close}
                  alt=""
                  onClick={() => {
                    toggleDrawer(false);
                  }}
                />
              </span>
            </div>
            <Divider
              sx={{
                width: "calc(100% - 30px)",
                margin: "6px auto 12px auto",
                background: "#CACDD8",
              }}
            />
            <List className="DrawerMobile-List">
              {[
                { name: "Laptops", id: "li1" },
                { name: "Desktop PCs", id: "li2" },
                { name: "Networking Devices", id: "li3" },
                { name: "PC Parts", id: "li4" },
                { name: "Printers & Scanners", id: "li5" },
                { name: "All Other Products", id: "li6" },
                { name: "Repairs", id: "li7" },
              ].map((props, index) => (
                <li key={props.name}>
                  <ListItemButton
                    onClick={() => {
                      handleClick(props.id);
                    }}
                    sx={{ padding: "12.5px auto" }}
                  >
                    <ListItemText primary={props.name} />
                    {open[props.id] ? (
                      <ExpandLess />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                  </ListItemButton>
                  <Collapse in={open[props.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <div>pc</div>
                        <div>lap</div>
                        <div>ram</div>
                        <div>cd</div>
                        <ListItemText />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </li>
              ))}
              <li>
                <button className="DrawerMobile-Deals">
                  <Link href={""}>Our Deals</Link>
                </button>
              </li>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
