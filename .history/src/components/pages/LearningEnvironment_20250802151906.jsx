/** @format */

import { ictTeaching, studentBehaviour, safetyAndSecurity } from "../../data";
import SectionSubitem from "../SectionSubitem/SectionSubitem";

export const LearningEnvironment = () => {
  return (
    <section
      className="administration container"
      id="AdministrationandManagement"
    >
      <SectionSubitem
        title="ICT and teaching/learning resources"
        titleBgColor="#3498db"
        credits="4"
        items={ictTeaching}
      />

      <SectionSubitem
        title="Managing student behaviour"
        titleBgColor="#27ae60"
        credits="9"
        items={studentBehaviour}
      />

      <SectionSubitem
        title="Safety and security"
        titleBgColor="#9b59b6"
        credits="5"
        items={safetyAndSecurity}
      />
    </section>
  );
};
