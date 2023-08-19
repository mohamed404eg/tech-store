import React from "react";

import "./Breadcrumbs.scss";

let data = [
  {
    dir: "Home",
    href: "#",
  },
  {
    dir: "Contact Us",
    href: "#",
    dirCurrent: true,
  },
];

type BreadcrumbsProps = {
  data: {
    dir: string;
    href: string;
    dirCurrent?: boolean;
    id: number | string;
  }[];
};

function Breadcrumbs({ data }: BreadcrumbsProps) {
  return (
    <div className="Breadcrumbs">
      {data.map((v) => {
        if (v.dirCurrent === true) {
          return (
            <div key={v.id}>
              <span className="dirCurrent">{v.dir}</span>
            </div>
          );
        }
        return (
          <div key={v.id}>
            <span className="dir">{v.dir}</span>
            <span className="arrow">›</span>
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
