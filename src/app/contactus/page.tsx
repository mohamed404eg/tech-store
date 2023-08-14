import React from "react";

import "./contactus.scss";
import Input from "@/components/contactus/Input";
import Image from "next/image";

// images
import Address from "../../../public/images/contactus/address.svg";
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
            <div>
              {" "}
              <Input
                id="YourName"
                placeholder="Your Name *"
                isrequired={true}
                label="Your Name *"
                type="text"
                name="name"
              />
              <Input
                id="YourEmail"
                placeholder="Your Email *"
                isrequired={true}
                label="Your Email *"
                type="email"
                name="email"
              />
            </div>
            <Input
              id="YourPhoneNumber"
              placeholder="Your Phone Number"
              isrequired={false}
              label="Your Phone Number"
              type="tel"
              name="Phone"
            />

            <textarea
              id="textarea"
              rows={4}
              cols={100}
              placeholder="Jot us a note and we’ll get back to you as quickly as possible"
              name="subject"
            ></textarea>
            <label htmlFor="textarea">What’s on your mind? *</label>
            <button type="button">Submit</button>
          </form>
        </div>
        <div className="part1">
          <div>
            <div>
              {" "}
              <Image src={Address} alt="Address"></Image>
              <span>Address:</span>
            </div>
            <div>1234 Street Adress City Address, 1234</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
