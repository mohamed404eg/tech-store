import React from "react";

import "./custompage.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

import imageArrow from "../../../../public/images/custompage/imageArrow.svg";
import DivLInkGo from "@/components/custompage/DivLInkGo";
let data = [
  {
    dir: "Home",
    href: "#",
    id: 1,
  },
  {
    dir: "About Us",
    href: "#",
    dirCurrent: true,
    id: 2,
  },
];
function page() {
  return (
    <div className="container custompage">
      {" "}
      <div className="">
        <Breadcrumbs data={data} />
      </div>
      <h1>Shop Terms & Conditions</h1>
      <div className="contentTopSlider">
        <div>
          <div className="descShort">
            GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
          </div>
          <article>
            <h2> Definitions & Interpretation</h2>

            <p>
              In the following Terms and Conditions of sale, unless the context
              requires otherwise
            </p>
            <ul>
              <li>(a) "Shop" means Shop Pty Ltd ABN 11 222 333 444;</li>
              <li>
                (b) "Customer" means the person or corporation placing an order
                for the purchase of goods or services from Shop;
              </li>
              <li>
                (c) "Products" means any goods, materials, equipment or services
                provided to the Customer by Shop;
              </li>
              <li>
                (d) if the Customer comprises more than one person, each of
                those person’s liability is joint and several;
              </li>
              <li>
                (e) references to a party or a person includes any form of
                entity and their respective successors, assigns and
                representatives;
              </li>
              <li>
                (f) for all periods and times specified in clauses 5 and 11,
                time is of the essence; and
              </li>
              <li>
                (g) all references to currency are references to Australian
                dollars.{" "}
              </li>
            </ul>

            <h2>General</h2>

            <p>
              By ordering the Products and/or accepting delivery of the Products
              from Shop, the Customer agrees that it is bound by these Terms and
              Conditions of sale. Customer orders, including orders placed via
              the internet, are subject to acceptance by Shop. The acceptance of
              the Customer's order by Shop is expressly made conditional upon
              the Customer's assent to these Terms and Conditions which will
              prevail notwithstanding anything that may be stated to the
              contrary on the Customer's order. Shop reserves the right to vary
              any of these terms at any time and any subsequent orders placed by
              the Customer will constitute an acceptance of the terms as varied.
              Once a Customer order has been placed and accepted by Shop, the
              Customer agrees that the Customer has no right to cancel or vary
              the order at any time, unless agreed upon in writing by both
              parties.
            </p>
            <h2>Quotations</h2>
            <p>
              Any quotation by Shop to the Customer will be open for acceptance
              by the Customer within the period stated in the quotation or,
              where no period is stated, within seven (7) days from the date of
              the quotation. Thereafter, prices stated in the quotation may be
              varied by Shop without notice to the Customer.
            </p>
          </article>
        </div>
        <DivLInkGo />
      </div>
    </div>
  );
}

export default page;
