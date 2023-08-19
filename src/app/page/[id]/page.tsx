import React from "react";

import "./Page.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Image from "next/image";
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

import Rectangle54 from "../../../../public/images/Page/Rectangle 54.jpg";
import Rectangle11 from "../../../../public/images/Page/Rectangle 11.png";
import Group174 from "../../../../public/images/Page/Group 174.svg";
import MaskGroup from "../../../../public/images/Page/Mask Group.png";
import Group175 from "../../../../public/images/Page/Group 175.svg";
import Rectangle13 from "../../../../public/images/Page/Rectangle 13.png";
import Group176 from "../../../../public/images/Page/Group 176.svg";
import logo from "../../../../public/images/Page/logo.svg";
import MaskGroup2 from "../../../../public/images/Page/Mask Group2.png";
import Review from "@/components/Home/Review/Review";
function page({ params }: { params: { id: string } }) {
  return (
    <div className=" Page">
      <div className="container">
        <Breadcrumbs data={data} />
      </div>
      <div className="container">
        <h1>About Us</h1>
      </div>
      <div className="groupContent">
        {/* content0 */}
        <div>
          <div>
            <h2>A Family That Keeps On Growing</h2>
            <div>
              {" "}
              <p>
                We always aim to please the home market, supplying great
                computers and hardware at great prices to non-corporate
                customers, through our large Melbourne CBD showroom and our
                online store.
              </p>
              <p>
                Shop management approach fosters a strong customer service focus
                in our staff. We prefer to cultivate long-term client
                relationships rather than achieve quick sales, demonstrated in
                the measure of our long-term success.
              </p>
            </div>
          </div>
          <div>
            <Image src={Rectangle54} alt=""></Image>
          </div>
        </div>
        {/*== content0 ==*/}
        {/* content1 */}
        <div>
          <div>
            <h2>
              <Image src={logo} alt=""></Image> <span>Shop.com</span>
            </h2>
            <div>
              {" "}
              <p>
                Shop.com is a proudly Australian owned, Melbourne based supplier
                of I.T. goods and services, operating since 1991. Our client
                base encompasses individuals, small business, corporate and
                government organisations. We provide complete business IT
                solutions, centred on high quality hardware and exceptional
                customer service.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={Rectangle11}
              alt=""
              style={{
                maxWidth: "777px",
                maxHeight: "557px",
              }}
            ></Image>
          </div>
        </div>
        {/*== content1 ==*/}
        {/* content2 */}
        <div>
          <div>
            <h2>
              {" "}
              <Image src={Group174} alt="" />{" "}
              <span>Now You're In Safe Hands2</span>
            </h2>
            <div>
              {" "}
              <p>
                Experience a 40% boost in computing from last generation. MSI
                Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
                upmost computing power to bring you an unparalleled gaming
                experience.
              </p>
              <p>*Performance compared to i7-9700. Specs varies by model.</p>
            </div>
          </div>
          <div>
            <Image
              src={MaskGroup}
              alt=""
              style={{
                maxHeight: "439.405px",
                maxWidth: "536.319px",
                transform: "rotate(1.087deg)",
              }}
              className="imgCover"
            ></Image>
          </div>
        </div>
        {/*== content2 ==*/}

        {/* content3 */}
        <div>
          <div>
            <h2>
              <Image src={Group175} alt="" />
              <span> The Highest Quality of Products</span>
            </h2>
            <div>
              {" "}
              <p>
                We guarantee the highest quality of the products we sell.
                Several decades of successful operation and millions of happy
                customers let us feel certain about that. Besides, all items we
                sell pass thorough quality control, so no characteristics
                mismatch can escape the eye of our professionals.
              </p>
            </div>
          </div>
          <div>
            <Image src={Rectangle13} alt="" className="imgCover"></Image>
          </div>
        </div>
        {/*== content3 ==*/}
        {/* content4 */}
        <div>
          <div>
            <h2>
              <Image src={Group176} alt="" />
              <span> We Deliver to Any Regions</span>
            </h2>
            <div>
              {" "}
              <p>
                We deliver our goods all across Australia. No matter where you
                live, your order will be shipped in time and delivered right to
                your door or to any other location you have stated. The packages
                are handled with utmost care, so the ordered products will be
                handed to you safe and sound, just like you expect them to be.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={MaskGroup2}
              alt=""
              style={{ maxWidth: "409px", maxHeight: "542.792px" }}
              className="imgCover"
            ></Image>
          </div>
        </div>

        {/*== content4 ==*/}
      </div>

      <div className="Review container">
        <Review />
      </div>
    </div>
  );
}

export default page;
