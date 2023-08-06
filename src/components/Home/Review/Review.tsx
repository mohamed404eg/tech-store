import React from "react";

import "./Review.scss";
import Link from "next/link";
import ReviewInput from "./ReviewInput/ReviewInput";
function Review() {
  return (
    <div className="Review container">
      <div className="ReviewContent">
        <div>
<div className="doubleQuotation-text">
<span className="doubleQuotation">‘’</span>
          <p>
            My first order arrived today in perfect condition. From the time I
            sent a question about the item to making the purchase, to the
            shipping and now the delivery, your company, Tecs, has stayed in
            touch. Such great service. I look forward to shopping on your site
            in the future and would highly recommend it.
          </p>

</div>

          
          <p className="ReviewUserName">- Tama Brown</p>
        </div>
        <div className="Review-btn-change">
          <button>
            <Link href={""}>Leave Us A Review</Link>
          </button>

          <ReviewInput />
        
        </div>
      </div>
    </div>
  );
}

export default Review;
