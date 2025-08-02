/** @format */

import React from 'react';
import './HeroSection.css';
import ButtonFilled from '../ButtonFilled/ButtonFilled';
import StyledList from '../StyledList/StyledList';
import SlidingText from '../SlidingText/SlidingText';

const HeroSection = () => {
	var data = [
		'Customized end-to-end solutions',
		'Partnerships with global tech leaders',
		'A client-first, results-driven approach',
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
						At RMP & Associates, we deliver tailored software and
						hardware solutions backed by brands like Lenovo, Zebra &
						Kaspersky. Here’s why organizations choose us as their
						IT partner:
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
