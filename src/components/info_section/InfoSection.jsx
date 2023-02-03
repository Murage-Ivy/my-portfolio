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

      <a href="#contacts">
        <button className="call-action">Hire Me</button>
      </a>
      <div className="social-btns">
        <a href="https://github.com/Murage-Ivy">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/ivy-murage/">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
        <a href="https://instagram.com/ivymurage?igshid=NmQ2ZmYxZjA=">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default InfoSection;
