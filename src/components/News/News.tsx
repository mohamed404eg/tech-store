import React from "react";

import "./News.scss";
import CopNews from "./CopNews";
function News() {
  return (
    <div className="HomeNews container">
      <h2>Follow us on Instagram for News, Offers & More</h2>
      <div className="contentNews">
        <CopNews />
        <CopNews />
        <CopNews />
        <CopNews />
        <CopNews />
        <CopNews />
        <CopNews />
       
      </div>
    </div>
  );
}

export default News;
