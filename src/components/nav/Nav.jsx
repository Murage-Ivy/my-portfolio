import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prev) => !prev);
  }
  return (
    <div className="nav">
      <ul>
        <li onClick={handleClick}>
          <a href="#home" id={active ? "active" : null}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleClick} id={active ? "active" : null}>
            About Me
          </a>
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
