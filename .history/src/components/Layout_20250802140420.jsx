import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderTop from "./HeaderTop/HeaderTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <HeaderTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
