/** @format */

import {
  ictTeaching,
  studentBehaviour,
  safetyAndSecurity,
  plantManagement,
  schoolCulture,
  communityEngagement,
} from "../../data";
import SectionSubitem from "../SectionSubitem/SectionSubitem";

export const AttributeDevelopment = () => {
  return (
    <section className="page container">
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
      <SectionSubitem
        title="Plant management"
        titleBgColor="#e67e22"
        credits="4"
        items={plantManagement}
      />
      <SectionSubitem
        title="School culture"
        titleBgColor="#16a085"
        credits="14"
        items={schoolCulture}
      />
      <SectionSubitem
        title="Community engagement and mobilization"
        titleBgColor="#2c3e50"
        credits="14"
        items={communityEngagement}
      />
    </section>
  );
};
