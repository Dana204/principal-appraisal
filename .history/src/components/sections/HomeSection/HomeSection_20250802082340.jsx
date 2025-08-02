/** @format */

import React from "react";
import HeaderTop from "../../HeaderTop/HeaderTop";
import Navbar from "../../Navbar/Navbar";
import HeroSection from "../../HeroSection/HeroSection";
import "./HomeSection.css";
import StyledList from "../../StyledList/StyledList";
import ButtonFilled from "../../ButtonFilled/ButtonFilled";

const HomeSection = () => {
  var data = [
    "Administration and Management",
    "Instructional Leadership",
    "Enabling environment for learning",
    "Personal attributes and development",
  ];
  return (
    <div className="home-section" id="home">
      {/* <div className="home-section__gradient"></div> */}
      <HeaderTop />
      <Navbar />
      <div className="home-section__banner container"></div>
      <div className="home-section__main container">
        <span className="section-title">Home</span>
        <p>Every child can learn, every child must learn</p>
        <h1>
          Principal Performance <br></br>Appraisal
        </h1>
        <p className="text-muted">
          The appraisal of the principal is intended to enable the principal to
          assess him/herself and position his or her performance on a continuous
          path of excellence, evidenced by optimum school outcomes. This
          assessment is organized in four categories:
        </p>
        {/* <StyledList items={data} /> */}
        <ButtonFilled label="Learn More" />
      </div>

      {/* <HeroSection /> */}
    </div>
  );
};

export default HomeSection;
