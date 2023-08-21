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

async function Home() {
  // get0

  const get = await fetch(`http://127.0.0.1:1337/api/products?random=true`);
  const data = await get.json();

  // get1
  const get1 = await fetch(`http://127.0.0.1:1337/api/products?random=true`);
  const data1 = await get1.json();

  // get2
  const get2 = await fetch(`http://127.0.0.1:1337/api/products?random=true`);
  const data2 = await get2.json();

  // get3
  const get3 = await fetch(`http://127.0.0.1:1337/api/products?random=true`);
  const data3 = await get3.json();

  return (
    <div className="app">
      <SectionWelcome />
      <NewProducts />
      <Ads />
      <div className="GruopProductsPage">
        <GruopProducts1 api={data} marginBottom={35} />
        <GruopProducts1
          api={data1}
          list={GruopProducts1Date}
          marginBottom={40}
        />
        <GruopProducts1
          api={data2}
          list={GruopProducts1Date}
          marginBottom={31}
        />
        <GruopProducts1 api={data3} />
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
export default Home;
