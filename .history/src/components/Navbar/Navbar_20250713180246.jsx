/** @format */

import React, { useState, useEffect }  from 'react';
import Logo from '../../assets/images/coat-of-arms.png';
import MenuIcon from '../../assets/icons/menu.svg?react';
import { Link, scrollSpy } from 'react-scroll';
import ButtonFilled from '../ButtonFilled/ButtonFilled';
import './Navbar.css';

const Navbar = () => {
	const navList = [
		'Administration and Management',
		'Instructional Leadership',
		': Enabling Environment for Learning',
		'Personal attributes and development',
	
		// 'contact',
	];

	const [scrolled, setScrolled] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	const menuHandler = () => {
		setToggleMenu(!toggleMenu)
	};

	const scrollHandler = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		scrollSpy.update(); // forces spy check on load
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<nav
			aria-label='Main Navigation'
			className={scrolled ? 'scrolled' : ''}>
			<div className='navbar container'>
				<a
					href='#'
					aria-label='Homepage'
				>

					<img alt="site logo" src={Logo} />
				<span>	Ministry of <br></br> Education</span>
				</a>

				<ul
					className={`navbar__list ${toggleMenu ? 'toggled' : ''}`}
					role='list'>
					{navList.map((link, idx) => (
						<li key={idx}>
							<Link
								to={link}
								spy={true}
								smooth={true}
								duration={500}
								offset={-70}
								activeClass='active'
								isDynamic={true}
								tabIndex='0'
								aria-label={`Go to ${link} section`}>
								{link}
							</Link>
						</li>
					))}
				</ul>

				{/* <ButtonFilled
					label='Contact Us'
					className='navbar__btn'
				/> */}

				<button
					onClick={menuHandler}
					className='navbar__menu'>
					<MenuIcon />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
