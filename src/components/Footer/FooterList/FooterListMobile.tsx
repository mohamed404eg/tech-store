"use client";
import React from "react";

import "./FooterList.scss";
import Link from "next/link";
import imagesTop from "../../../../public/images/Footer/end/arrow-top.svg";
import imagesBottom from "../../../../public/images/Footer/end/arrow-bottom.svg";
import Image from "next/image";
function FooterListMobile() {
  const [list, openList] = React.useState<listType>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  type listType = {
    item1: boolean;
    item2: boolean;
    item3: boolean;
    item4: boolean;
    item5: boolean;

    [key: string]: boolean;
  };

  const Arrow = ({ dir }: { dir: boolean }): React.JSX.Element => {
    return (
      <>
        <Image src={dir ? imagesBottom : imagesTop} alt="imagesTop"></Image>
      </>
    );
  };

  const handleClick = (value: string) => {
    openList(
      (i) =>
        (i = {
          ...i,
          [value]: !i[value],
        })
    );
  };
  return (
    <div className="FooterListMobile">
      {" "}
      <div className="footer-list-mobile container">
        <div>
          <span
            onClick={() => {
              handleClick("item1");
            }}
          >
            Information <Arrow dir={list.item1} />
          </span>
          <ul
            className={
              list.item1
                ? "footer-list-mobile-ul"
                : "footer-list-mobile-ul-close"
            }
          >
            <li>
              {" "}
              <Link href={""}>About Us </Link>
            </li>
            <li>
              <Link href={""}>About Zip</Link>
            </li>
            <li>
              <Link href={""}>Privacy Policy </Link>{" "}
            </li>
            <li>
              <Link href={""}>Search </Link>
            </li>
            <li>
              <Link href={""}>Terms </Link>
            </li>
            <li>
              <Link href={""}>Orders and Returns </Link>
            </li>
            <li>
              <Link href={""}>Contact Us </Link>
            </li>
            <li>
              <Link href={""}>Advanced Search</Link>
            </li>
            <li>
              <Link href={""}>Newsletter Subscription </Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <span
            onClick={() => {
              handleClick("item2");
            }}
          >
            PC Parts <Arrow dir={list.item2} />
          </span>
          <ul
            className={
              list.item2
                ? "footer-list-mobile-ul"
                : "footer-list-mobile-ul-close"
            }
          >
            <li>
              {" "}
              <Link href={""}>CPUS</Link>
            </li>
            <li>
              <Link href={""}>Add On Cards</Link>
            </li>
            <li>
              <Link href={""}>Hard Drives (Internal)</Link>{" "}
            </li>
            <li>
              <Link href={""}>Graphic Cards </Link>
            </li>
            <li>
              <Link href={""}>Keyboards / Mice </Link>
            </li>
            <li>
              <Link href={""}>Cases / Power Supplies / Cooling </Link>
            </li>
            <li>
              <Link href={""}>RAM (Memory)</Link>
            </li>
            <li>
              <Link href={""}>Software</Link>
            </li>
            <li>
              <Link href={""}>Speakers / Headsets</Link>{" "}
            </li>
            <li>
              <Link href={""}>Motherboards</Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <span
            onClick={() => {
              handleClick("item3");
            }}
          >
            Desktop PCs <Arrow dir={list.item3} />
          </span>
          <ul
            className={
              list.item3
                ? "footer-list-mobile-ul"
                : "footer-list-mobile-ul-close"
            }
          >
            <li>
              {" "}
              <Link href={""}>Custom PCs</Link>
            </li>
            <li>
              <Link href={""}>Servers</Link>
            </li>
            <li>
              <Link href={""}>MSI All-In-One PCs</Link>{" "}
            </li>
            <li>
              <Link href={""}>HP/Compaq PCs</Link>
            </li>
            <li>
              <Link href={""}>ASUS PCs</Link>
            </li>
            <li>
              <Link href={""}>Tecs PCs</Link>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <span
            onClick={() => {
              handleClick("item4");
            }}
          >
            Laptops <Arrow dir={list.item4} />
          </span>
          <ul
            className={
              list.item4
                ? "footer-list-mobile-ul"
                : "footer-list-mobile-ul-close"
            }
          >
            <li>
              {" "}
              <Link href={""}>Evryday Use Notebooks</Link>
            </li>
            <li>
              <Link href={""}>MSI Workstation Series</Link>
            </li>
            <li>
              <Link href={""}>MSI Prestige Series</Link>{" "}
            </li>
            <li>
              <Link href={""}>Tablets and Pads</Link>
            </li>
            <li>
              <Link href={""}>Netbooks </Link>
            </li>
            <li>
              <Link href={""}>Infinity Gaming Notebooks</Link>
            </li>
          </ul>
        </div>
        <div>
          <span
            onClick={() => {
              handleClick("item5");
            }}
          >
            Address <Arrow dir={list.item5} />
          </span>
          <ul
            className={
              list.item5
                ? "footer-list-mobile-ul"
                : "footer-list-mobile-ul-close"
            }
          >
            <li>
              {" "}
              <p>Address: 1234 Street Adress City Address, 1234</p>
            </li>
            <li>
              <p>Phones: (00) 1234 5678</p>
            </li>
            <li>
              <p>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>{" "}
            </li>
            <li>
              <p>Friday: 9:00 AM - 6:00 PM</p>
            </li>
            <li>
              <p>Saturday: 11:00 AM - 5:00 PM </p>
            </li>
            <li>
              <p>E-mail: shop@email.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterListMobile;
