import Image from "next/image";
import React from "react";

import Link from "next/link";

export type CopNewsProps = {
  id: number | string;
  image: string;
  title: string;
  body: string;
  time: string;
};
function CopNews({ id, title, body, time, image }: CopNewsProps) {
  return (
    <Link href={`/blog/${id}`} className="CopNews">
      <Image src={image} alt="image" width={100} height={151}></Image>
      <p className="desc">{body}</p>
      <p className="time">{time}</p>
    </Link>
  );
}

export default CopNews;
