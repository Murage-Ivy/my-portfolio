import React from "react";
import "./Project.css";
function Project() {
  return (
    <div id="projects">
      <div className="project-card">
        <img src="../assets/Images/restaurant.jpg" alt="restro" />
        <p>
          An application that enables you find
          <br />
          restaurants available in Nairobi
          <br />
          and enables you view different foods.
        </p>
        <div className="primary-actions-btn">
          <button>View Project</button>
          <button>View Github</button>
        </div>
      </div>

      <div className="project-card">
        <img src="../assets/Images/books.jpg" alt="books" />
      </div>
      <div className="project-card">
        <img src="../assets/Images/farm.jpg" alt="" />
      </div>
      <div className="project-card"></div>
    </div>
  );
}

export default Project;
