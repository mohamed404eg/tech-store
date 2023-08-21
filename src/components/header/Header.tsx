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
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import axios from "axios";

type NavHeaderMap = {
  id: number;
  attributes: {
    title: string;
    href: string;
  };
};
async function Header() {
  // NavHeader

  const { data: NavHeader } = await axios(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}navs`
  );

  return (
    <header className="header">
      <div className="header-lg">
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
          <Link href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>

          <InputSearch />
          <div className="header-second-list">
            <nav>
              <ul>
                <li className="Laptops">
                  <MegaMenu />
                </li>

                {NavHeader.data.map((value: NavHeaderMap) => (
                  <li>
                    <Link href={value.attributes.href}>
                      {value.attributes.title}
                    </Link>
                  </li>
                ))}
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
        </div>{" "}
      </div>

      <div className="header-md">
        <HeaderMobile />
      </div>
    </header>
  );
}

export default Header;
