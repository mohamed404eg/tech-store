import React from "react";

import "./Login.scss";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Input from "@/components/contactus/Input";

// json
let data = [
  {
    dir: "Home",
    href: "#",
  },
  {
    dir: "Login",
    href: "#",
    dirCurrent: true,
  },
];

function page() {
  return (
    <div className="container LoginTop">
      <Breadcrumbs data={data} />
      <h1>Customer Login</h1>
      <div className="Login">
        <div className="Registered">
          <h2>Registered Customers</h2>
          <p>If you have an account, sign in with your email address.</p>

          <form>
            <Input
              id="Email"
              placeholder="Email"
              isrequired={true}
              label="Email"
              type="email"
              name="Email"
            />

            <Input
              id="Password"
              placeholder="Password"
              isrequired={true}
              label="Password"
              type="password"
              name="Password"
            />
          </form>

          <div className="button-action">
            <button type="button" className="SignIn">Sign In</button>
            <button type="button" className="Forgot">Forgot Your Password?</button>
          </div>
        </div>
        <div className="NewCustomer">
          <h2>New Customer?</h2>
          <p>Creating an account has many benefits: </p>

          <ul>
            <li>Check out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>

          <button type="button">Create An Account</button>
        </div>
      </div>
    </div>
  );
}

export default page;
