import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
