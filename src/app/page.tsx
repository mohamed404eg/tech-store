import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/header/Header";
import Product from "@/components/product/Product";
import SectionWelcome from "@/components/Home/SectionWelcome";

export default function Home() {
  return (
    <div>
      {<Header />}
      {<SectionWelcome />}
    </div>
  );
}
