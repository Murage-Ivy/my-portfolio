import React from "react";
import "./About.css";
function About() {
  // const  progressBar = () =>{
  //   document.documentElement.s
  // }
  return (
    <div id="about">
      <div className="image-1">
        <img src="../assets/Images/Person.svg" alt="person" />
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Ivy Murage is a entry level full stack developer who is passionate
          <br />
          about building web applications. Other than She enjoys making user
          <br />
          interfaces designs and this is a field that she is currently exploring
        </p>

        <div className="my-stacks">
          <h3>My Stacks</h3>
          <ul>
            <li>
              Html
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li>
              Css
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li>
              Javascript
              <span className="bar">
                <span className="javascript"></span>
              </span>
            </li>
            <li>
              React Js
              <span className="bar">
                <span className="reactjs"></span>
              </span>
            </li>

            <li>
              Redux
              <span className="bar">
                <span className="redux"></span>
              </span>
            </li>
            <li>
              Ruby On Rails
              <span className="bar">
                <span className="ruby"></span>
              </span>
            </li>
            <li>
              Ux/Ui
              <span className="bar">
                <span className="ux"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
