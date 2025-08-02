import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ title, subtitle, highlight, variant, mode = 'dark' }) => {
    const parts = title.split(new RegExp(`(${highlight})`, "gi"));

    return (
        <div className={`section-title ${variant} ${mode}`}>
            <p>{subtitle}</p>
            <h2>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="highlight">{part}</span>
                    ) : (
                        part
                    )
                )}
            </h2>
        </div>
    );
}

export default SectionTitle