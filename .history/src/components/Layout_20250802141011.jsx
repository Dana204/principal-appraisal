import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderTop from "./HeaderTop/HeaderTop";
import { Outlet } from "react-router-dom";
import Breadcrumb from "./Breadcrumb/Breadcrumb";

const Layout = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
