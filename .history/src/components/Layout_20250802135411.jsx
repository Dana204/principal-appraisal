import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderTop from "./HeaderTop/HeaderTop";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderTop />
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
