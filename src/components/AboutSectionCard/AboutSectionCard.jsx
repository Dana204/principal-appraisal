import React from 'react'
import './AboutSectionCard.css'

const AboutSectionCard = ({title, text, icon, className}) => {
  return (
      <div className={`about-section-card ${className}`}>
          <div className='about-section-card__icon'>
     
        {icon && React.cloneElement(icon, { className: 'about-section-card__icon-svg' })}
          </div>
          <div className='about-section-card__body'>
              <h5>{title}</h5>
              <p className='text-muted'>{text}</p>
          </div>
    </div>
  )
}

export default AboutSectionCard