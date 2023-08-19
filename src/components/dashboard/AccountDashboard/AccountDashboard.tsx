import React from "react";

import "./AccountDashboard.scss";
import Link from "next/link";
function AccountDashboard() {
  return (
    <div className="AccountDashboard">
      <h1>My Dashboard</h1>
      <div className="AccountInformation">
        <h2>Account Information</h2>
        <div className="AccountInformation-part0">
          <div>
            <h3>Contact Information</h3>
            <div className="desc">
              <p>Alex Driver </p>
              <p>ExampeAdress@gmail.com</p>
            </div>
            <div className="action">
              <Link href={""}>Edit</Link>
              <Link href={""}>Change Password</Link>
            </div>
          </div>
          <div>
            <h3>Newsletters</h3>
            <div className="desc">
              <p>You don't subscribe to our newsletter. </p>
            </div>
            <div className="action">
              <Link href={""}>Edit</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="AddressBook">
        <h2>
          Address Book <Link href={""}>Menage Addresses</Link>
        </h2>
        <div className="AccountInformation-part0">
          <div>
            <h3>Default Billing Address</h3>
            <div className="desc">
              <p>You have not set a default billing address.</p>
            </div>
            <div className="action">
              <Link href={""}>Edit Address</Link>
            </div>
          </div>
          <div>
            <h3>Default Shipping Address</h3>
            <div className="desc">
              <p>You have not set a default shipping address.</p>
            </div>
            <div className="action">
              <Link href={""}>Edit Address</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDashboard;
