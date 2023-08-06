import Image from "next/image";
import "./page.scss";
import Header from "../components/header/Header";
import Product from "@/components/product/Product";
import SectionWelcome from "@/components/Home/SectionWelcome";
import NewProducts from "@/components/Home/NewProducts/NewProducts";
import Ads from "@/components/Home/ads/Ads";
import GruopProducts1 from "@/components/GruopProducts/GruopProducts-1/GruopProducts1";

import GruopProducts1Date from "../data/GruopProducts1-list.json";
import ScrollBack from "@/components/ScrollBack/ScrollBack";
import Brand from "@/components/brand/Brand";
import News from "@/components/News/News";
import Review from "@/components/Home/Review/Review";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div>
      <SectionWelcome />
      <NewProducts />
      <Ads />
      <div className="GruopProductsPage">
        <GruopProducts1 marginBottom={35} />
        <GruopProducts1 list={GruopProducts1Date} marginBottom={40} />
        <GruopProducts1 list={GruopProducts1Date} marginBottom={31} />
        <GruopProducts1 />
      </div>

      <ScrollBack />

      <div className="container HomeBrand">
        <Brand />
      </div>

      <News />
      <Review />
    </div>
  );
}
