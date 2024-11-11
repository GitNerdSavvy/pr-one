import React from "react";
import image from "../assets/Sanjeev.png";
import Resume from "../assets/SanjeevResume.pdf";

import {
  FaInstagram,
  FaGithub,
  FaRegHeart,
  FaRegComment,
  FaRegShareSquare,
  FaLinkedin,
  FaTwitter,
  FaSnapchat,
} from "react-icons/fa";
const Card = () => {
  return (
    <div className="profile-card">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="text-data">
        <span className="name">Sanjeev Yadav</span>
        <span className="job">MERN Stack Dev</span>
      </div>

      <div className="media-buttons">
        <a
          href="https://www.instagram.com/sanjeev___yadav_/"
          target="_blank"
          className="link"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.snapchat.com/add/im_savvyy?share_id=n05q5lGtbK4&locale=en-US"
          className="link"
          target="_blank"
        >
          <FaSnapchat />
        </a>
        <a
          href="https://github.com/GitNerdSavvy"
          className="link"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjeev-yadav-7a7a08259/"
          className="link"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="buttons">
        <a
          href="SanjeevResume.pdf"
          download="Sanjeev Resume"
          className="button"
        >
          Hire Me
        </a>
        <a
          href="https://sanjeev-yadav-portfolio.netlify.app/"
          target="_blank"
          className="button"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Card;
