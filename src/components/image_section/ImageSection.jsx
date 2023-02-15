import React from "react";
import "./ImageSection.css";

function ImageSection() {
  return (
    <div className="image-section">
      <img src="../assets/Images/IMG_8914.JPG" alt="myimage" />
      <div className="brief-intro">
        <p>
          Hello there! My name is Ivy Muarge, and I am a full stack developer
          specializing in Ruby on Rails and React. I have a strong background in
          front-end development, including experience with HTML, CSS, and
          JavaScript. I am also skilled in back-end development, having worked
          with Ruby on Rails to create dynamic and scalable web applications. I
          am a dedicated and hardworking team player who is always eager to
          learn and grow in my field. When I'm not working on a project, you can
          find me experimenting with new recipes in the kitchen. Thank you for
          taking the time to learn a bit about me.
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
