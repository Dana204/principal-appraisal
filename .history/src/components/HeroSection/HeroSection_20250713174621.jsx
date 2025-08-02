/** @format */

import React from 'react';
import './HeroSection.css';
import ButtonFilled from '../ButtonFilled/ButtonFilled';
import StyledList from '../StyledList/StyledList';
import SlidingText from '../SlidingText/SlidingText';

const HeroSection = () => {
	var data = [
		'Administration and Management',
		'Instructional Leadership',
		'Enabling environment for learning',
		'Personal attributes and development',
	];
	return (
		<>
			<div className='hero-section'>
				<div className='container'>
					<p>
						Every child can learn, every child must learn
					</p>
					<h1>
					rincipal Performance<br></br> <mark>Appraisal</mark> 
					</h1>
					<p className='text-mute'>
					The appraisal of the principal is intended to enable the principal to assess him/herself and position his or
her performance on a continuous path of excellence, evidenced by optimum school outcomes. This
assessment is organized in four categories:
					</p>
					<StyledList items={data} />
					<ButtonFilled label='Learn More' />
				</div>
			</div>
			<SlidingText />
		</>
	);
};

export default HeroSection;
