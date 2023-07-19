// style
import "./header.scss";

// next
import Image from "next/image";

// images
import arrowbottom from "../../../public/images/header/arrow-bottom.svg";
import facebook from "../../../public/images/header/ant-design_facebook-filled.svg";
import instagram from "../../../public/images/header/ant-design_instagram-filled.svg";
import Logo from "../../../public/images/header/Logo.svg";

import Personal from "../../../public/images/header/Personal.svg";

// next
import Link from "next/link";
import Search from "./Search/Search";
import InputSearch from "./Search/InputSearch";
import Cart from "./cart/Cart";
import Account from "../Account/Account";
import ShopInfo from "./ShopInfo/ShopInfo";
import MegaMenu from "./MegaMenu/MegaMenu";

function Header() {
  return (
    <header className="header">
      <div className="header-top ">
        <div className="container">
          <div className="h-t-time-open ">
            <ShopInfo />
          </div>
          <div className="h-t-contact">
            <span>
              Visit our showroom in 1234 Street Adress City Address, 1234{" "}
              <Link href={""}>Contact Us</Link>
            </span>
          </div>
          <div className="h-t-call">
            <div>Call Us: (00) 1234 5678</div>
            <div className="h-t-call-media">
              <Link href={""}>
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href={""}>
                <Image src={instagram} alt="instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="header-second container">
        <Image src={Logo} alt="logo" />

        <InputSearch />
        <div className="header-second-list">
          <nav>
            <ul>
              <li className="Laptops">
                <MegaMenu />
              </li>
              <li>Desktop PCs</li>
              <li>Networking Devices</li>
              <li>Printers & Scanners</li>
              <li>PC Parts</li>
              <li>All Other Products</li>
              <li>Repairs</li>
              <li className="Our">
                <Link href={""}>Our Deals</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="client">
          <Search />
          <div className="cart">
            <Cart />
          </div>
          <Account />
        </div>
      </div>
    </header>
  );
}

export default Header;
