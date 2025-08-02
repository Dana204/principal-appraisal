/** @format */

import React from 'react';
import EmailIcon from '../../assets/icons/email.svg?react';
import PhoneIcon from '../../assets/icons/phone.svg?react';
import LocationIcon from '../../assets/icons/location.svg?react';
import InstagramIcon from '../../assets/icons/instagram.svg?react';
import LinkedInIcon from '../../assets/icons/linkedin.svg?react';
import TwitterIcon from '../../assets/icons/twitter.svg?react';
import './HeaderTop.css';

const HeaderTop = () => {
	return (
		<div className='header-top'>
			<div className='container'>
				
				<ul
					className='header-top__social'
					role='list'>
					<li>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Instagram'>
							<InstagramIcon className='header-top__social-svg' />
						</a>
					</li>
					<li>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='LinkedIn'>
							<LinkedInIcon className='header-top__social-svg' />
						</a>
					</li>
					<li>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Twitter'>
							<TwitterIcon className='header-top__social-svg' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default HeaderTop;
