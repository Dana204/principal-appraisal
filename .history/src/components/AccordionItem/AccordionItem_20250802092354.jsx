import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({
  title,
  credits,
  evidence,
  detailContent,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      >
        <div className="action-text">
          <span className="action-title">{title}</span>
          <span className="action-credits">({credits} credits)</span>
        </div>
        {/* <div className="evidence-text">Evidence: {evidence}</div> */}
        <div className="accordion-icon">{isOpen ? "−" : "+"}</div>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-content-inner">
            {typeof detailContent === "string" ? (
              <div dangerouslySetInnerHTML={{ __html: detailContent }} />
            ) : (
              detailContent
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
