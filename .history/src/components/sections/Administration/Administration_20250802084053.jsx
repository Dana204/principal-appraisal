/** @format */

import React from "react";
import "./Administration.css";
import RightArrowIcon from "../../../assets/icons/right-arrow.svg?react";
import VisionIcon from "../../../assets/icons/vision.svg?react";
import CheckboxIcon from "../../../assets/icons/checkbox.svg?react";
import Image1 from "../../../assets/images/hero-image.jpg";
import Image2 from "../../../assets/images/hero-image2.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AboutSectionCard from "../../AboutSectionCard/AboutSectionCard";
import ButtonFilled from "../../ButtonFilled/ButtonFilled";

export const Administration = () => {
  return (
    <section
      className="administration container"
      id="administrationandmanagement"
    >
      <div className="about-section__details">
        <p className="text-muted">
          We offer Proven Expertise in Web, Mobile & Client-Server Application
          Development, Consultancy Services and Systems Integration,and best of
          Breed Hardware Solutions from partners like Lenovo, Zebra, Kaspersky,
          Lexmark & Honeywell. This blend of Expertise and Partnerships added to
          our client centric philosophy makes us the perfect choice for your IT
          Partner.
        </p>

        <ul role="list" className="grid-containe">
          <li>
            <span>10+</span>
            <h6>Team Members</h6>
          </li>
          <li>
            <span>150+</span>
            <h6>Happy Clients</h6>
          </li>
          <li>
            <span>10%</span>
            <h6>Client Satisfaction</h6>
          </li>
        </ul>
      </div>
      <div className="about-section__image">
        {/* <div>

        <img alt='image' src={Image2} />
        <img alt='image' src={Image1} />
        <div>
          Since 2015
        </div>
        </div> */}
      </div>
    </section>
  );
};
