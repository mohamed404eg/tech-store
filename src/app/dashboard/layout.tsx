"use client";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";

import "./dashboard.scss";
import { usePathname, useSearchParams } from "next/navigation";
import AccountInformation from "@/components/dashboard/AccountInformation/AccountInformation";
import AccountDashboard from "@/components/dashboard/AccountDashboard/AccountDashboard";
import NavMobile from "@/components/dashboard/NavMobile/NavMobile";

let data = [
  {
    dir: "Home",
    href: "#",
    id: 0,
  },
  {
    dir: "My Dashboard",
    href: "#",
    dirCurrent: true,
    id: 1,
  },
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  //   console.log(pathname);

  return (
    <div className="dashboardTop container">
      <div className="Breadcrumbs">
        <Breadcrumbs data={data} />
      </div>
  
        <NavMobile />
   
      <div className="dashboard">
        <div className="part0">
          <h1>My Dashboard</h1>
          <div className="groupOne">
            <div>
              <Link
                href={"/dashboard"}
                className={pathname === "/dashboard" ? "active" : ""}
              >
                Account Dashboard
              </Link>
              <Link
                href={"/dashboard/information"}
                className={
                  pathname === "/dashboard/information" ? "active" : ""
                }
              >
                Account Information
              </Link>
              <Link
                href={"/dashboard/address"}
                className={pathname === "/dashboard/address" ? "active" : ""}
              >
                Address Book
              </Link>
              <Link
                href={"/dashboard/orders"}
                className={pathname === "/dashboard/orders" ? "active" : ""}
              >
                My Orders
              </Link>
            </div>
            <div>
              {" "}
              <Link
                href={"/dashboard/downloadable"}
                className={
                  pathname === "/dashboard/downloadable" ? "active" : ""
                }
              >
                My Downloadable Products
              </Link>
              <Link
                href={"/dashboard/payment"}
                className={pathname === "/dashboard/payment" ? "active" : ""}
              >
                Stored Payment Methods
              </Link>
              <Link
                href={"/dashboard/billing"}
                className={pathname === "/dashboard/billing" ? "active" : ""}
              >
                Billing Agrements
              </Link>
              <Link
                href={"/dashboard/wishlist"}
                className={pathname === "/dashboard/wishlist" ? "active" : ""}
              >
                My Wish List
              </Link>
            </div>
            <div>
              {" "}
              <Link
                href={"/dashboard/reviews"}
                className={pathname === "/dashboard/reviews" ? "active" : ""}
              >
                My Product Reviews
              </Link>
              <Link
                href={"/dashboard/newsletter"}
                className={pathname === "/dashboard/newsletter" ? "active" : ""}
              >
                Newsletter Subscriptions
              </Link>
            </div>
          </div>
          <div className="CompareProducts">
            <h2>Compare Products</h2>
            <p>You have no items to compare.</p>
          </div>
          <div className="MyWishList">
            <h2>MyWishList</h2>
            <p>You have no items in your wish list.</p>
          </div>
        </div>
        <div className="part1">
          {pathname === "/dashboard" ? <AccountDashboard /> : <></>}
          {children}
        </div>
      </div>
    </div>
  );
}
