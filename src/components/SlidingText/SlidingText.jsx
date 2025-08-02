/** @format */

import React, { useEffect, useRef, useState } from 'react';
import Icon from '../../assets/icons/star.svg?react';
import './SlidingText.css';

const SlidingText = () => {
	const containerRef = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setInView(entry.isIntersecting);
			},
			{
				threshold: 0.1,
			},
		);
		if (containerRef.current) observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, []);

	const words = ['Expertise', 'Integration', 'Consultancy', 'Partnerships'];
	const renderWordsWithIconsHandler = () => {
		return words.map((word, idx) => (
			<span
				className='word-block'
				key={idx}>
				{word}
				<Icon className='word-icon' />
			</span>
		));
	};

	const repeatedContent = Array(20)
		.fill(renderWordsWithIconsHandler())
		.flat();

	return (
		<div
			className='sliding-text'
			ref={containerRef}>
			{inView && (
				<div className='sliding-text__content'>
					<p>{repeatedContent}</p>
				</div>
			)}
		</div>
	);
};

export default SlidingText;
