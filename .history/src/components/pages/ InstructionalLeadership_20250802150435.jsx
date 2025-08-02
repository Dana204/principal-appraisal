/** @format */

import { planningItems, financialItems, professionalItems } from "../../data";
import SectionSubitem from "../SectionSubitem/SectionSubitem";

export const InstructionalLeadership = () => {
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
