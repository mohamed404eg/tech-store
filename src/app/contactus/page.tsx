import React from "react";

import "./contactus.scss";
import Input from "@/components/contactus/Input";
import Image from "next/image";

// images
import Address from "../../../public/images/contactus/address.svg";
import Phone from "../../../public/images/contactus/Phone.svg";
import open from "../../../public/images/contactus/open.svg";
import email from "../../../public/images/contactus/E-mail.svg";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

// json
let data = [
  {
    dir: "Home",
    href: "#",
  },
  {
    dir: "Contact Us",
    href: "#",
    dirCurrent: true,
  },
];

function page() {
  return (
    <div className="container">
      <div className="contactus">
        <div className="part0">
          <Breadcrumbs data={data} />
          <h1>Contact Us</h1>
          <p>
            We love hearing from you, our Shop customers. Please contact us and
            we will make sure to get back to you as soon as we possibly can.
          </p>
          <form>
            <div className="inpu0">
              {" "}
              <Input
                id="YourName"
                placeholder="Your Name "
                isrequired={true}
                label="Your Name "
                type="text"
                name="name"
              />
              <Input
                id="YourEmail"
                placeholder="Your Email "
                isrequired={true}
                label="Your Email "
                type="email"
                name="email"
              />
            </div>

            <div className="Phone">
              <Input
                id="YourPhoneNumber"
                placeholder="Your Phone Number"
                isrequired={false}
                label="Your Phone Number"
                type="tel"
                name="Phone"
              />
            </div>

            <div className="subject">
              <label htmlFor="textarea">
                What’s on your mind? <span>*</span>
              </label>
              <textarea
                id="textarea"
                rows={4}
                cols={100}
                placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                name="subject"
                required
              ></textarea>
            </div>
            <button type="button">Submit</button>
          </form>
        </div>
        <div className="part1">
          {/* --- */}
          <div>
            <div>
              {" "}
              <Image src={Address} alt="Address"></Image>
              <span>Address:</span>
            </div>
            <div className="desc">1234 Street Adress City Address, 1234</div>
          </div>
          {/* --- */}
          {/* --- */}
          <div>
            <div>
              {" "}
              <Image src={Phone} alt="Address"></Image>
              <span>Phone:</span>
            </div>
            <div className="desc">(00)1234 5678</div>
          </div>
          {/* --- */}
          {/* --- */}
          <div>
            <div>
              {" "}
              <Image src={open} alt="Address"></Image>
              <span>We are open:</span>
            </div>
            <div className="desc">
              <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
              <p>Friday 9:00 AM - 6:00 PM</p>
              <p>Saturday: 11:00 AM - 5:00 PM</p>
            </div>
          </div>
          {/* --- */}
          {/* --- */}
          <div>
            <div>
              {" "}
              <Image src={email} alt="Address"></Image>
              <span>E-mail:</span>
            </div>
            <div className="desc">
              <span>shop@email.com</span>
            </div>
          </div>
          {/* --- */}
        </div>
      </div>
    </div>
  );
}

export default page;
