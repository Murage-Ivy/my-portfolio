import React, { useEffect, useRef, useState } from "react";
import "./About.css";
function About() {
  const [progressBar, setProgressBar] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    function isVisible() {
      const position = window.pageYOffset;
      setProgressBar(position);
    }
    window.addEventListener("scroll", isVisible);
  }, [progressBar]);

  return (
    <div id="about" ref={inputRef}>
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
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "html" : null
                  }
                ></span>
              </span>
            </li>
            <li>
              Css
              <span className="bar">
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "css" : null
                  }
                ></span>
              </span>
            </li>
            <li>
              Javascript
              <span className="bar">
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "javascript" : null
                  }
                ></span>
              </span>
            </li>
            <li>
              React Js
              <span className="bar">
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "reactjs" : null
                  }
                ></span>
              </span>
            </li>

            <li>
              Redux
              <span className="bar">
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "redux" : null
                  }
                ></span>
              </span>
            </li>
            <li>
              Ruby On Rails
              <span className="bar">
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "ruby" : null
                  }
                ></span>
              </span>
            </li>
            <li>
              Ux/Ui
              <span className="bar">
                <span
                  className={
                    progressBar > 0 && progressBar >= 406 ? "ux" : null
                  }
                ></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
