/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();

  // Get the current path segments
  const pathnames = location.pathname.split("/").filter((x) => x); // remove empty string from leading slash

  return (
    <div className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol>
          {pathnames.map((segment, index) => {
            const path = `/${pathnames.slice(0, index + 1).join("/")}`;
            const label = segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());
            const isLast = index === pathnames.length - 1;

            return (
              <li key={index} aria-current={isLast ? "page" : undefined}>
                {isLast ? <span>{label}</span> : <Link to={path}>{label}</Link>}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
