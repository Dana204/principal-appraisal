export const navList = [
  "home",
  "Administration and Management",
  "Instructional Leadership",
  "Enabling Environment for Learning",
  "Personal attributes and development",
];

// ADMINISTRATION AND MANAGEMENT

export const planningItems = [
  {
    title: "Develops and promotes shared vision",
    credits: 2,
    evidence:
      "Staff and other stakeholders knew and understood the vision, mission, goals, strategy and expected outcomes of the school plan",
    detailContent: `
        <h4>Evidence Requirements</h4>
      
      `,
  },
  {
    title:
      "Allocates financial resources strategically to ensure adequate and conducive educational environment ",
    credits: 2,
    evidence: "Budget, cash book, expenditure reports",
    detailContent: `
    <h4>Evidence Requirements</h4>
    
    
    `,
  },
  {
    title: "Collects, analyses and uses data",
    credits: 3,
    evidence:
      "Allocated financial resources proportionately to improve and maintain the educational",
    detailContent: `
        <h4>Evidence Requirements:</h4>
       
      `,
  },
];

export const financialItems = [
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

export const professionalItems = [
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
