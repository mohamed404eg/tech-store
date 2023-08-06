import React from "react";

import "./Footer.scss";
import Image from "next/image";

import img from "../../../public/images/Footer/features/Support.svg";
import img2 from "../../../public/images/Footer/features/Account.svg";
import img3 from "../../../public/images/Footer/features/Saving.svg";
import Link from "next/link";

// end images
import fb from "../../../public/images/Footer/end/ant-design_facebook-filled.svg";
import inst from "../../../public/images/Footer/end/ant-design_instagram-filled.svg";
import visa from "../../../public/images/Footer/end/visa.svg";
import maestro from "../../../public/images/Footer/end/maestro.svg";
import paypal from "../../../public/images/Footer/end/paypal.svg";
import discover from "../../../public/images/Footer/end/discover.svg";
import american from "../../../public/images/Footer/end/american-express.svg";
import FooterListMobile from "./FooterList/FooterListMobile";
function Footer() {
  return (
    <div className="Footer">
      <div className="features container">
        <div className="features-single">
          <Image src={img} alt=""></Image>
          <h4>Product Support</h4>
          <p>
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>
        <div className="features-single">
          <Image src={img2} alt=""></Image>
          <h4>Personal Account</h4>
          <p>
            With big discounts, free delivery and a dedicated support
            specialist.
          </p>
        </div>
        <div className="features-single">
          <Image src={img3} alt=""></Image>
          <h4>Amazing Savings</h4>
          <p>Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
      </div>
      <div className="group">
        <div className="Subscribe container">
          <div>
            <h3>Sign Up To Our Newsletter.</h3>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div className="Subscribe-btn">
            <input type="email" placeholder="Your Email" />
            <button type="button">Subscribe</button>
          </div>
        </div>

        <div className="footer-list container">
          <div>
            <ul>
              <li>
                <span>Information</span>
              </li>
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
            <ul>
              <li>
                <span>PC Parts</span>
              </li>
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
            <ul>
              <li>
                <span>Desktop PCs</span>
              </li>
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
            <ul>
              <li>
                <span>Laptops</span>
              </li>
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
            <ul>
              <li>
                <span>Address</span>
              </li>
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
        <FooterListMobile />

        <div className="footerEnd">
          <div className="container footerEnd-inst">
            <div className="footerEnd-1">
              <Image src={fb} alt=""></Image>
              <Image src={inst} alt=""></Image>
            </div>
            <div className="footerEnd-2">
              <Image src={paypal} alt=""></Image>
              <Image src={visa} alt=""></Image>
              <Image src={maestro} alt=""></Image>
              <Image src={discover} alt=""></Image>
              <Image src={american} alt=""></Image>
            </div>
            <div className="footerEnd-3">
              Copyright © {new Date().getFullYear()} Shop Pty. Ltd.
            </div>
          </div>
          <div className="footerEnd-2-xsm">
            <Image src={paypal} alt=""></Image>
            <Image src={visa} alt=""></Image>
            <Image src={maestro} alt=""></Image>
            <Image src={discover} alt=""></Image>
            <Image src={american} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
