/** @format */

import React from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import ServiceCard from '../../ServiceCard/ServiceCard';
import ServiceIcon1 from '../../../assets/icons/service1.svg?react';
import ServiceIcon2 from '../../../assets/icons/service2.svg?react';
import ServiceIcon3 from '../../../assets/icons/service3.svg?react';
import ServiceIcon4 from '../../../assets/icons/service4.svg?react';
import PhoneImage from '../../../assets/images/service-image.png';
import './ServicesSection.css';

const ServicesSection = () => {
	var services = [
		{
			title: '.Net Software Development',
			text: 'We build robust applications within the Microsoft .NET Framework. Ranging from MVC web applications to mobile and desktop applications.',
			icon: <ServiceIcon1 />,
		},
		{
			title: 'Android Applications Development',
			text: 'We build interactive and responsive Android apps.',
			icon: <ServiceIcon2 />,
		},
		{
			title: 'Hardware Solutions',
			text: 'We provide full scale hardware solutions for all your technological needs.',
			icon: <ServiceIcon3 />,
		},
		{
			title: 'Consultancy Services',
			text: 'We provide expert consultancy to suggest the best solutions to your problems.',
			icon: <ServiceIcon4 />,
		},
	];
	return (
		<div
			className='services-section'
			id='services'>
			<div className='container'>
				<SectionTitle
					subtitle={'Our Services'}
					title='We are dedicated to serve you all the time'
					highlight='dedicated'
					variant={'center'}
				/>
				<div className='services-section__grid grid-container'>
					{services.map((service, idx) => (
						<ServiceCard
							key={idx}
							title={service.title}
							text={service.text}
							icon={service.icon}
							number={`0${idx + 1}`}
						/>
					))}
				</div>

				<div className='services-section__content'>
					<div className='services-section__content-card'>
						{services.slice(0, 2).map((service, idx) => (
							<ServiceCard
								key={idx}
								title={service.title}
								text={service.text}
								icon={service.icon}
								number={`0${idx + 1}`}
							/>
						))}
					</div>
					<img
						src={PhoneImage}
						alt='phone'
					/>
					<div className='services-section__content-card'>
						{services.slice(2, 4).map((service, idx) => (
							<ServiceCard
								key={idx}
								title={service.title}
								text={service.text}
								icon={service.icon}
								number={`0${services.indexOf(service) + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
