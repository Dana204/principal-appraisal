/** @format */

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/coat-of-arms.png";
import "./Navbar.css";
import MenuIcon from "../../assets/icons/menu.svg?react";
import { navList } from "../../data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const scrollHandler = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav aria-label="Main Navigation" className={scrolled ? "scrolled" : ""}>
      <div className="navbar container">
        <a href="https://moey.gov.jm/" aria-label="Homepage" target="_blank">
          <img alt="site logo" src={Logo} />
          <span>
            {" "}
            The Ministry of <br></br>Education
          </span>
        </a>
        <ul
          className={`navbar__list ${toggleMenu ? "toggled" : ""}`}
          role="list"
        >
          {navList.map((link, idx) => {
            const path =
              link === "home"
                ? "/"
                : `/${link.replaceAll(" ", "-").toLowerCase()}`;
            return (
              <li key={idx}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  tabIndex="0"
                  aria-label={`Go to ${link} page`}
                  onClick={() => setToggleMenu(false)}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button onClick={menuHandler} className="navbar__menu">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
