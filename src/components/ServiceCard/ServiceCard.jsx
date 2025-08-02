/** @format */

import React from 'react';
import ServiceIcon from '../../assets/icons/service.svg?react'
import './ServiceCard.css';


const ServiceCard = ({ title, icon, text, number }) => {
	return (
		<div className='service-card'>
			<div className='service-card__top'>
				<div>
					{icon}
				</div>
				<p>{number}</p>
			</div>
			<h6>{title}</h6>
			<p className='text-muted'>{text}</p>
		
		</div>
	);
};

export default ServiceCard;
