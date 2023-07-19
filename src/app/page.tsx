import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/header/Header";
import Product from "@/components/product/Product";

export default function Home() {
  return (
    <div>
      {<Header />}
      {<Product />}
    </div>
  );
}
