/* eslint-disable no-unused-vars */
// import "./SocialMedia.css";
import { socialMediaLinks } from "../assets/portfolio.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

import { SocialIcon } from 'react-social-icons/component'


export default function SocialMedia() {
  return (
    <div className="social-media-div grid grid-flow-col gap-5">
  
      {/* <FontAwesomeIcon icon={faYoutube} size="2x" /> */}

      {/* <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a> */}
      {/* <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a> */}
      <a
        href={socialMediaLinks.youtube}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i className="fab fa-google"></i> */}
        <FontAwesomeIcon icon={faYoutube} size="2x" />

        <span></span>
      </a>
      {/* <a
        href={socialMediaLinks.instagram}
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>

        <span></span>
      </a> */}

      <a
        href={socialMediaLinks.facebook}
        className="icon-button facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <i className="fab fa-facebook"></i> */}
        <FontAwesomeIcon icon={faFacebook} size="2x" />

        <span></span>
      </a>
    </div>
  );
}
