/** @format */

import React from "react";
import EmailIcon from "../../assets/icons/email.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";
import LocationIcon from "../../assets/icons/location.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import LinkedInIcon from "../../assets/icons/linkedin.svg?react";
import TwitterIcon from "../../assets/icons/twitter.svg?react";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <span>Principal Performance Appraisal | Stacey Wilson-Reynolds</span>
        <span>
          <b>Prepared By</b>: Stacey Wilson-Reynolds
        </span>
        {/* <ul className="header-top__contact" role="list">
          <li>
            <EmailIcon className="header-top__contact-svg" aria-hidden="true" />
            <a href="mailto:rmp@rmp.com.jm">rmp@rmp.com.jm</a>
          </li>
          <li>
            <PhoneIcon className="header-top__contact-svg" aria-hidden="true" />
            <a href="tel:8769782022">(876)978-2022</a>
          </li>
          <li>
            <LocationIcon
              className="header-top__contact-svg"
              aria-hidden="true"
            />
            <address>
              Suite #13, 1D Braemar Ave. Kingston 5. Jamaica
            </address>
          </li>
        </ul> */}
        {/* <ul
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
				</ul> */}
      </div>
    </div>
  );
};

export default HeaderTop;
