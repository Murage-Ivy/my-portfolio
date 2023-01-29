import React from "react";
import "./ImageSection.css";

function ImageSection() {
  return (
    <div className="image-section">
      <img src="../assets/Images/IMG_8914.JPG" alt="myimage" />
      <div className="brief-intro">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          culpa impedit pariatur blanditiis deserunt ea error perferendis atque
          quos, mollitia dicta. Corrupti ipsum adipisci laborum quod labore
          nesciunt consequuntur. Earum?
        </p>
        <div className="action-btns">
          <button>View Resume</button>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
