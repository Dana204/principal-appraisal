/** @format */

import React from 'react';
import './ButtonFilled.css';
import RightArrowIcon from '../../assets/icons/right-arrow.svg?react';

const ButtonFilled = ({
	label,
	displayIcon = true,
	icon = RightArrowIcon, 
	variant = '',
	className = '',
}) => {
	return (
		<button className={`button-filled ${className} ${variant}`}>
			<span>{label}</span>
			{displayIcon && icon && (
				<div>
					{React.createElement(icon, {
						className: 'button-filled__svg',
					})}
				</div>
			)}
		</button>
	);
};

export default ButtonFilled;
