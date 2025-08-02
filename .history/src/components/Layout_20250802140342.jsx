import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderTop from "./HeaderTop/HeaderTop";

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
