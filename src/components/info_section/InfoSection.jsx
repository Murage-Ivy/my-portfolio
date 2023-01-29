import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoSection.css";

function InfoSection() {
  return (
    <div className="info-section">
      <div className="top-level">
        <h3>Hello</h3>
        <h1>I'm Ivy Murage</h1>
        <h4>I am Entry Level Full Stack Developer</h4>
      </div>
      <p>
        I’m both a frontend and backend Developer, who is passionate about
        <br />
        building user friendly and beautiful applications on the internet
      </p>

      <button className="call-action">Hire Me</button>
      <div className="social-btns">
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <FontAwesomeIcon icon={faLinkedinIn} className="icon"  />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </div>
    </div>
  );
}

export default InfoSection;
