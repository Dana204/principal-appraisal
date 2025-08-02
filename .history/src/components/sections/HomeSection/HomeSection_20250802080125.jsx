/** @format */

import React from "react";
import HeaderTop from "../../HeaderTop/HeaderTop";
import Navbar from "../../Navbar/Navbar";
import HeroSection from "../../HeroSection/HeroSection";
import "./HomeSection.css";

const HomeSection = () => {
  return (
    <div className="home-section" id="home">
      {/* <div className="home-section__gradient"></div> */}
      {/* <HeaderTop /> */}
      <Navbar />
      <div className="home-section__banner container"></div>

      {/* <HeroSection /> */}
    </div>
  );
};

export default HomeSection;
