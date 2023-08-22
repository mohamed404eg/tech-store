import React from "react";

import "./News.scss";
import CopNews, { CopNewsProps } from "./CopNews";
import axios from "axios";
import { type } from "os";

type CopNewsMap = {
  id: string;
  attributes: {
    image: string;
    title: string;

    body: string;
    createdAt: string;
  };
};

async function News() {
  const getApi = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}blogs`
  );

  const getApiSlice = await getApi.data.data.slice(8);
  //console.log(getApi.data);

  return (
    <div className="HomeNews container">
      <h2>Follow us on Instagram for News, Offers & More</h2>
      <div className="contentNews">
        {getApiSlice.map((v: CopNewsMap) => (
          <CopNews
            key={v.id}
            id={v.id}
            image={v.attributes.image}
            title={v.attributes.title}
            body={v.attributes.body}
            time={v.attributes.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
