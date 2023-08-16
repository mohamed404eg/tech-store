import React from "react";

import "./Address.scss";
import Input from "@/components/contactus/Input";
import SelectCustom from "@/components/checkout/select/SelectCustom";
function Address() {
  return (
    <div className="checkoutAddress">
      <div>
        <h2>Shipping Address</h2>
      </div>
      <form>
        <div className="EmailAddress">
          <Input
            type="email"
            placeholder=""
            id="email"
            label="Email Address"
            isrequired={true}
            name="email"
          />
          <span>You can create an account after checkout.</span>
        </div>
        <div className="InputInfo">
          <Input
            type="text"
            placeholder=""
            id="FirstName"
            label="First Name"
            isrequired={true}
            name="FirstName"
          />
          <Input
            type="text"
            placeholder=""
            id="LastName"
            label="Last Name"
            isrequired={true}
            name="LastName"
          />
          <Input
            type="text"
            placeholder=""
            id="Company"
            label="Company"
            isrequired={true}
            name="Company"
          />
          <div className="StreetAddress">
            {" "}
            <Input
              type="text"
              placeholder=""
              id="StreetAddress"
              label="Street Address"
              isrequired={true}
              name="StreetAddress"
            />
            <Input
              type="text"
              placeholder=""
              id="StreetAddress2"
              label=""
              isrequired={false}
              name="StreetAddress2"
            />
          </div>{" "}
          <Input
            type="text"
            placeholder=""
            id="City"
            label="City"
            isrequired={true}
            name="City"
          />
          <div>
            <SelectCustom
              classNamed="perPage"
              contentBefore="Show:"
              option={[
                { id: 1, name: "35 per page" },
                { id: 2, name: "10 per page" },
                { id: 3, name: "20 per page" },
                { id: 4, name: "30 per page" },
              ]}
              label="State/Province"
              isrequired={true}
            />
          </div>
          <Input
            type="text"
            placeholder=""
            id="ZipPostalCode"
            label="Zip/Postal Code"
            isrequired={true}
            name="ZipPostalCode"
          />{" "}
          <div>
            <SelectCustom
              classNamed="perPage"
              contentBefore="Show:"
              option={[
                { id: 1, name: "United States" },
                { id: 2, name: "Egypt" },
                { id: 3, name: "20 per page" },
                { id: 4, name: "30 per page" },
              ]}
              label="State/Province"
              isrequired={true}
            />
          </div>{" "}
          <Input
            type="tel"
            placeholder=""
            id="PhoneNumber"
            label="Phone Number"
            isrequired={true}
            name="PhoneNumber"
          />{" "}
        </div>

       
      
      </form>
    </div>
  );
}

export default Address;
