import "./Catalog.scss";

import image26 from "../../../../public/images/Catalog/image 26.jpg";
import Frame49 from "../../../../public/images/Catalog/Frame 49.svg";
import Frame50 from "../../../../public/images/Catalog/Frame 50.svg";
import Image from "next/image";
import SelectCustom from "@/components/select/SelectCustom";
import ProductFormat from "@/components/Catalog/ProductFormat/ProductFormat";
import PartTow from "@/components/Catalog/part-2/PartTow";
import Product from "@/components/product/Product";
import MyPagination from "@/components/Catalog/Pagination/MyPagination";
import Filter from "@/components/Catalog/filter/Filter";
import ProductTow from "@/components/productTow/ProductTow";
import MyProduct from "./MyProduct";
import FilterMobile from "@/components/Catalog/FilterMobile/FilterMobile";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="container">
      <div className="CatalogWelcome">
        <Image src={image26} alt="image26"></Image>
      </div>

      <div className="Breadcrumbs">
        <span className="dir">Home</span>
        <span className="arrow">›</span>
        <span className="dir">Laptops</span>
        <span className="arrow">›</span>
        <span className="dir"> Everyday Use Notebooks</span>
        <span className="arrow">›</span>
        <span className="dir"> MSI Prestige Series</span>
        <span className="arrow">›</span>
        <span className="dirCurrent">MSI WS</span>
      </div>

      <h2 className="catalogH2">MSI PS Series (20)</h2>
      <div className="catalog">
        <div className="filter">
          <Filter />
        </div>
        <div className="result">
          <div className="part-1">
            <div className="part-1-Items">Items 1-35 of 61</div>
            <div className="part-2-Items">
              <SelectCustom
                classNamed="Position"
                contentBefore="Sort By:"
                option={[
                  { id: 1, name: "Position" },
                  { id: 2, name: "price" },
                  { id: 3, name: "name" },
                  { id: 4, name: "Best" },
                ]}
              />
              <SelectCustom
                classNamed="perPage"
                contentBefore="Show:"
                option={[
                  { id: 1, name: "35 per page" },
                  { id: 2, name: "10 per page" },
                  { id: 3, name: "20 per page" },
                  { id: 4, name: "30 per page" },
                ]}
              />
              <div className="part-2-Items-appear">
                <ProductFormat />
              </div>

              <div className="FilterOpenXSM">
                <FilterMobile />
              </div>
            </div>
          </div>

          <div className="part-2">
            <PartTow />
          </div>

          <div className="part-3">
            <MyProduct />
          </div>
          <div className="CatalogMyPagination">
            <MyPagination />
          </div>
          <div className="CatalogText">
            <p>
              {" "}
              MSI has unveiled the Prestige Series line of business-class and
              gaming notebooks. Tuned for color accuracy, the Prestige Series
              also leverages True Color Technology, which allows users to adjust
              the display profile to best fit their computing needs.
            </p>
            <p>
              There are six different screen profiles, which are tuned for
              gaming, reducing eye fatigue, sRGB color accuracy, increasing
              clarity for words and lines, reducing harmful blue light, and
              optimizing contrast for watching movies. Given the various display
              profiles and discrete graphics chip, the Prestige Series notebooks
              can be used for various design work as well as for office tasks
              given that the screen can be adjusted for better clarity, color
              accuracy, or for eye strain reduction. Users working with video or
              3D rendering will appreciate the "movie mode" for which contrast
              is increased.
            </p>
            <p>
              Home users or students can benefit from the "anti-blue" and the
              "office mode" options, both of which are designed to reduce eye
              strain. This is helpful when working on the computer for extended
              periods of time. Additionally, in their down time, students can
              also use the "gamer mode" to increase the screen brightness.
            </p>{" "}
          </div>
          <input className="CatalogTextMore" type="checkbox" value="" />
        </div>
      </div>
    </div>
  );
}
