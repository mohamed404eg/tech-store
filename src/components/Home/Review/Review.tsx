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
            <div className="ReviewSwitch">
              <p>
                My first order arrived today in perfect condition. From the time
                I sent a question about the item to making the purchase, to the
                shipping and now the delivery, your company, Tecs, has stayed in
                touch. Such great service. I look forward to shopping on your
                site in the future and would highly recommend it.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </div>

          <p className="ReviewUserName">- Tama Brown</p>
        </div>
        <div className="Review-btn-change">
          <button>
            <Link href={"#"}>Leave Us A Review</Link>
          </button>

          <ReviewInput />
        </div>
      </div>
    </div>
  );
}

export default Review;
