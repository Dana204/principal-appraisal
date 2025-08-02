import React, { useState } from "react";
import "./AccordionItem.css";

const AccordionItem = ({
  title,
  credits,
  evidence,
  detailContent,
  isOpen,
  onToggle,
  color,
}) => {
  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        style={{ borderLeft: "4px solid var(--black)" }}
        onKeyDown={(e) => e.key === "Enter" && onToggle()}
      >
        <div>
          <span className="action-title">{title}</span>
          <div className="evidence-text text-muted">Evidence: {evidence}</div>
        </div>
        <div className="accordion-header__right">
          <span className="action-credits">({credits} credits)</span>
          <div className="accordion-icon">{isOpen ? "−" : "+"}</div>
        </div>
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
