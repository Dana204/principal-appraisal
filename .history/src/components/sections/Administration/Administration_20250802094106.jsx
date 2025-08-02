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
import SectionSubitem from "../../SectionSubitem/SectionSubitem";

export const Administration = () => {
  const planningItems = [
    {
      title: "Develops and promotes shared vision",
      credits: 2,
      evidence: "SIP, stakeholder involvement, staff meetings",
      detailContent: `
        <h4>Performance Criteria:</h4>
        <ul>
          <li>Staff and stakeholders understand the vision and mission</li>
          <li>School plan clearly articulates goals and expected outcomes</li>
          <li>Regular communication of vision through multiple channels</li>
        </ul>
      `,
    },
    {
      title: "Allocates financial resources strategically",
      credits: 2,
      evidence: "Budget, cash book, expenditure reports",
      detailContent: (
        <div>
          <h4>Performance Indicators:</h4>
          <ul>
            <li>
              Resources allocated based on identified needs and priorities
            </li>
            <li>Budget aligns with School Improvement Plan</li>
            <li>Regular financial monitoring and reporting</li>
          </ul>
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#f0f8ff",
              borderRadius: "5px",
            }}
          >
            <strong>Assessment Notes:</strong>
            <textarea
              style={{
                width: "100%",
                marginTop: "5px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
              rows="3"
              placeholder="Enter assessment comments..."
            />
          </div>
        </div>
      ),
    },
    {
      title: "Collects, analyses and uses data",
      credits: 3,
      evidence: "Data analysis reports, student performance tracking",
      detailContent: `
        <h4>Evidence Requirements:</h4>
       
      `,
    },
  ];

  const financialItems = [
    {
      title: "Ensures fiscal management requirements are met",
      credits: 4,
      evidence: "Financial reports, budget, procurement procedures",
      detailContent: (
        <div>
          <h4>Compliance Checklist:</h4>
        </div>
      ),
    },
    {
      title: "Aligns expenditure to available funds",
      credits: 2,
      evidence: "Financial controller records, expenditure tracking",
      detailContent: `
        <h4>Assessment Criteria:</h4>
        <p>Principal demonstrates effective budget management by:</p>
        <ul>
          <li>Staying within approved budget limits</li>
          <li>Prioritizing expenditures based on educational needs</li>
          <li>Maintaining accurate expenditure records</li>
        </ul>
      `,
    },
  ];

  const professionalItems = [
    {
      title: "Provides ongoing professional development opportunities",
      credits: 4,
      evidence: "Development strategy, needs identification, interventions",
      detailContent: (
        <div>
          <h4>Professional Development Framework:</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            <div>
              <strong>Needs Identification:</strong>
              <ul style={{ fontSize: "12px", marginTop: "5px" }}>
                <li>Staff appraisal analysis</li>
                <li>Performance gap assessment</li>
                <li>Professional growth planning</li>
              </ul>
            </div>
            <div>
              <strong>Implementation:</strong>
              <ul style={{ fontSize: "12px", marginTop: "5px" }}>
                <li>Targeted interventions</li>
                <li>Training program enrollment</li>
                <li>Follow-up and evaluation</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="administration container"
      id="AdministrationandManagement"
    >
      <h2>Administration and Management</h2>

      <SectionSubitem
        title="Planning, Organization and Operation"
        titleBgColor="#3498db"
        credits="17"
        items={planningItems}
      />

      {/* Financial Management */}
      <SectionSubitem
        title="Financial Management"
        titleBgColor="#27ae60"
        credits="6"
        items={financialItems}
      />

      {/* Professional Capacity Building */}
      <SectionSubitem
        title="Professional Capacity Building"
        titleBgColor="#9b59b6"
        credits="12"
        items={professionalItems}
      />

      {/* <div className="section-title">Planning, Organization and Operation</div>
      <div className="section-title">Financial Management</div>
      <div className="section-title">Professional Capacity Building</div> */}

      {/* <div className="section-subitem">
        <h3>Planning, Organization and Operation</h3>

      </div> */}
    </section>
  );
};
