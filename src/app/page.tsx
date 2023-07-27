import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/header/Header";
import Product from "@/components/product/Product";
import SectionWelcome from "@/components/Home/SectionWelcome";
import NewProducts from "@/components/Home/NewProducts/NewProducts";
import Ads from "@/components/Home/ads/Ads";
import GruopProducts1 from "@/components/GruopProducts/GruopProducts-1/GruopProducts1";

import GruopProducts1Date from "../data/GruopProducts1-list.json";
export default function Home() {
  return (
    <div>
      <Header />
      <SectionWelcome />
      <NewProducts />
      <Ads />
      <GruopProducts1 marginBottom={35} />
      <GruopProducts1 list={GruopProducts1Date} marginBottom={40} />
      <GruopProducts1 list={GruopProducts1Date} marginBottom={31} />
      <GruopProducts1 />
    </div>
  );
}
