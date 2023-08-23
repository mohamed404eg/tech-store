import React from "react";
import "./ProdectPageSngale.scss";
import Image from "next/image";

import img from "../../../../public/images/Product/image 9.png";

import icon1 from "../../../../public/images/Product/Group 106.svg";
import icon2 from "../../../../public/images/Product/Group 107.svg";
import icon3 from "../../../../public/images/Product/mail.svg";
import installment from "../../../../public/images/PageProduct/installment.svg";
import Link from "next/link";
import ComponentManagementResult from "../ComponentManagementResult/ComponentManagementResult";
import ComponentManagement, {
  ComponentManagementProps,
} from "../ComponentManagement/ComponentManagement";
import Part0 from "../Part0/Part0";
function ProdectPageSngale({ data }: ComponentManagementProps) {
  return (
    <div className="ProdectPageSngale">
      <div className="imageProduct">
        <div className="add">
          <Image src={icon1} alt=""></Image>
          <Image src={icon2} alt=""></Image>
          <Image src={icon3} alt=""></Image>
        </div>

        <div>
          <Image
            className="productimage"
            src={data.attributes.images}
            alt="product image"
            width={255}
            height={444}
          ></Image>
          <Image
            className="productimage2"
            src={data.attributes.images2}
            alt="product image"
            width={255}
            height={444}
          ></Image>
        </div>
      </div>
      <div className="installment">
        <Image src={installment} alt="installment"></Image>
        <span className="line"></span>
        <span className="text">
          own it now, up to 6 months interest free{" "}
          <Link href="">learn more</Link>
        </span>
      </div>
      <div className="imageChange">
        <div>
          <input type="radio" name="images" id="imagesPrimer" />
          <label htmlFor="imagesPrimer"></label>
        </div>
        <div>
          <input type="radio" name="images" id="imagesPrimer2" />
          <label htmlFor="imagesPrimer2"></label>
        </div>
        <div>
          <input type="radio" name="images" id="imagesPrimer3" />
          <label htmlFor="imagesPrimer3"></label>
        </div>
      </div>

      <div className="Part0Mobile">
        <Part0 />
      </div>
    </div>
  );
}

export default ProdectPageSngale;
