import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HeaderTop from "./HeaderTop/HeaderTop";
import Breadcrumb from "./Breadcrumb/Breadcrumb";

const Layout = () => {
  const location = useLocation();
  const isHome =
    location.pathname === "/" || location.pathname === "/principal-appraisal";

  return (
    <div>
      <HeaderTop />
      <Navbar />
      {!isHome && <Breadcrumb />}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
