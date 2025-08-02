import React, { useState } from "react";
const SectionSubitem = ({
  title,
  titleBgColor = "#3498db",
  items = [],
  credits,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === items.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(items.map((_, index) => index)));
    }
  };

  return (
    <div className={`section-subitem ${className}`}>
      <div
        className="section-subitem-header"
        style={{ backgroundColor: titleBgColor }}
      >
        <h3 className="section-subitem-title">
          {title}
          {credits && (
            <span className="credits-badge">({credits} credits)</span>
          )}
        </h3>
        {items.length > 0 && (
          <button className="toggle-all-btn" onClick={toggleAll} type="button">
            {openItems.size === items.length ? "Collapse All" : "Expand All"}
          </button>
        )}
      </div>
      <div className="section-subitem-body">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            credits={item.credits}
            evidence={item.evidence}
            detailContent={item.detailContent}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionSubitem;
