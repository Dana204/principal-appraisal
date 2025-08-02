/** @format */

import React from "react";
import "./AdminManagement.css";
import RightArrowIcon from "../../../assets/icons/right-arrow.svg?react";
import VisionIcon from "../../../assets/icons/vision.svg?react";
import CheckboxIcon from "../../../assets/icons/checkbox.svg?react";
import Image1 from "../../../assets/images/hero-image.jpg";
import Image2 from "../../../assets/images/hero-image2.jpg";
import SectionTitle from "../../SectionTitle/SectionTitle";
import AboutSectionCard from "../../AboutSectionCard/AboutSectionCard";
import ButtonFilled from "../../ButtonFilled/ButtonFilled";
import SectionSubitem from "../../SectionSubitem/SectionSubitem";
import { financialItems, planningItems, professionalItems } from "@/data";

export const AdminManagement = () => {
  return (
    <section
      className="administration container"
      id="AdministrationandManagement"
    >
      <SectionSubitem
        title="Planning, Organization and Operation"
        titleBgColor="#3498db"
        credits="17"
        items={planningItems}
      />

      <SectionSubitem
        title="Financial Management"
        titleBgColor="#27ae60"
        credits="6"
        items={financialItems}
      />

      <SectionSubitem
        title="Professional Capacity Building"
        titleBgColor="#9b59b6"
        credits="12"
        items={professionalItems}
      />
    </section>
  );
};
