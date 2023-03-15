import React from "react";
import "./ImageSection.css";

function ImageSection() {
  return (
    <div className="image-section">
      <img src="../assets/Images/IMG_8914.JPG" alt="myimage" />
      <div className="brief-intro">
        <p>
          I'm Ivy Muarge, a full stack developer with expertise in Ruby on Rails and React.
          I have extensive experience in front-end development with HTML, CSS, and JavaScript,
          as well as in creating dynamic web applications with Ruby on Rails for the back-end.
          I'm a dedicated team player, always eager to learn and grow. In my free time,
          I enjoy experimenting with new recipes in the kitchen. Thank you for reading about me!
        </p>
        <div className="action-btns">
          <button>
            <a href="https://drive.google.com/file/d/1G45ptHlDBFycQwuYj8CsqrSyLUXbANd9/view?usp=share_link">
              View Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
