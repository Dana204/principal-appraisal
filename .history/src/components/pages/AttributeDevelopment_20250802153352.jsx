/** @format */

import { personalItems } from "../../data";
import SectionSubitem from "../SectionSubitem/SectionSubitem";

export const AttributeDevelopment = () => {
  return (
    <section className="page container">
      <SectionSubitem
        title="Ethical Behaviour and Professional development and advancement"
        titleBgColor="#3498db"
        credits="7"
        items={personalItems}
      />
    </section>
  );
};
