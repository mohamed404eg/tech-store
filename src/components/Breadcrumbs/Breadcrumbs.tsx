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
  }[];
};

function Breadcrumbs({ data }: BreadcrumbsProps) {
  return (
    <div className="Breadcrumbs">
      {data.map((v) => {
        if (v.dirCurrent === true) {
          return (
            <>
              <span className="dirCurrent">{v.dir}</span>
            </>
          );
        }
        return (
          <>
            <span className="dir">{v.dir}</span>
            <span className="arrow">›</span>
          </>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
