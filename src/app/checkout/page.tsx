import React from "react";

import "./checkout.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Processing from "@/components/checkout/processing/Processing";
import Address from "@/components/checkout/Address/Address";
import OrderSummary from "@/components/checkout/OrderSummary/OrderSummary";

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
    <div className="pageCheckout container">
      <div>
        <Breadcrumbs data={data} />
      </div>
      <div className="part0">
        <div>
          <h1>Checkout</h1> <button type="button">Sign In</button>
        </div>
        <div className="ProcessingDivTop">
          <Processing />
        </div>
      </div>

      <div className="part1">
        <div>
          <Address />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
      <div>
        <div className="CartShipping">
          <div>
            <label htmlFor="StandardRate">Standard Rate</label>
            <div>
              {" "}
              <input
                type="radio"
                id="StandardRate"
                name="Shipping"
                defaultChecked
              />
              <div>
                <span>
                  Price may vary depending on the item/destination. Shop Staff
                  will contact you.
                </span>
                <span>$21.00</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="Pickupfromstore">Pickup from store</label>
            <div>
              {" "}
              <input type="radio" id="Pickupfromstore" name="Shipping" />
              <div>
                <span>1234 Street Adress City Address, 1234</span>{" "}
                <span>$0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="Next">
        Next
      </button>

      <OrderSummary classname="OrderSummary2" />
    </div>
  );
}

export default page;
