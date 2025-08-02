/** @format */

import React from 'react';
import './NewsCard.css';
import DateIcon from '../../assets/icons/email.svg?react'
import ButtonFilled from '../ButtonFilled/ButtonFilled';

const NewsCard = ({ title, image, text }) => {
	return (
		<div className='news-card'>
			<img
				src={image}
				alt='thumbnail'
			/>
			<div className='news-card__body'>
				<h6>{title}</h6>
                <span>
                    <DateIcon />
					<time dateTime='2024-03-29'>March 29, 2024</time>
				</span>
				<p className='text-muted'>{text}</p>
				<a href='#'>Read More</a>
				{/* <ButtonFilled label='Read More' /> */}
			</div>
		</div>
	);
};

export default NewsCard;
