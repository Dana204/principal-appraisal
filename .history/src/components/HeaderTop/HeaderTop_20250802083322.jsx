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
          {/* <b>Prepared By</b>: Stacey Wilson-Reynolds */}
          Every child can learn, every child must learn
        </span>
      </div>
    </div>
  );
};

export default HeaderTop;
