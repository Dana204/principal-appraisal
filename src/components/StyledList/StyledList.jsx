import React from 'react'
import './StyledList.css'
import BulletIcon from '../../assets/icons/bullet2.svg?react'

const StyledList = ({items,variant='light', className=''}) => {
  return (
		<ul
			className={`styled-list ${className} ${variant}`}
			role='list'>
			{items.map((item, idx) => (
				<li key={idx}>
					<BulletIcon />
					<span>{item}</span>
				</li>
			))}
		</ul>
  );
}

export default StyledList