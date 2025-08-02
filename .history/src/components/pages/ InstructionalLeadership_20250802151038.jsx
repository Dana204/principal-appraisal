/** @format */

import { curriculum, teaching, evaluation } from "../../data";
import SectionSubitem from "../SectionSubitem/SectionSubitem";

export const InstructionalLeadership = () => {
  return (
    <section
      className="administration container"
      id="AdministrationandManagement"
    >
      <SectionSubitem
        title="Curriculum"
        titleBgColor="#3498db"
        credits="10"
        items={curriculum}
      />

      <SectionSubitem
        title="Financial Management"
        titleBgColor="#27ae60"
        credits="20"
        items={teaching}
      />

      <SectionSubitem
        title="Professional Capacity Building"
        titleBgColor="#9b59b6"
        credits="10"
        items={evaluation}
      />
    </section>
  );
};
