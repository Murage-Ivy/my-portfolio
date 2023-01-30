import React from "react";
import "./About.css";
function About() {
  return (
    <div id="about">
      <div className="image-1">
        <img src="../assets/Images/Person.svg" alt="person" />
      </div>

      <div className="about-me">
        <p>
          Ivy Murage is a entry level full stack developer who is passionate
          <br />
          about building web applications. Other than She enjoys making user
          <br />
          interfaces designs and this is a field that she is currently exploring
        </p>

        <div className="my-stacks">
          <h3>My Stacks</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
