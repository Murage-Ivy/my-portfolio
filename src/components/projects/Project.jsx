import React from "react";
import "./Project.css";
function Project() {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project-card">
          <div className="img">
            <img src="../assets/Images/restaurant.jpg" alt="restro" />
          </div>
          <p>
            An application that enables you find
            <br />
            restaurants available in Nairobi
            <br />
            and enables you view different foods.
          </p>
          <div className="primary-actions-btn">
            <button>
              <a href="https://restrofinder.netlify.app/">View Project</a>
            </button>
            <button>
              <a
                href="https://github.com/Murage-Ivy/restro"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>
            </button>
          </div>
        </div>

        <div className="project-card">
          <div className="img">
            <img src="../assets/Images/books.jpg" alt="books" />
          </div>
          <p>
            An application that enables readers who enjoy african books to share
            the their interesting reads and also find a book to read
          </p>
          <div className="primary-actions-btn">
            <button>
              <a href="https://maktafri.netlify.app/">View Project</a>
            </button>

            <button>
              <a
                href="https://github.com/Murage-Ivy/maktafri_frontend"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>
            </button>
          </div>
        </div>
        <div className="project-card">
          <div className="img">
            <img src="../assets/Images/farm.jpg" alt="" />
          </div>

          <p>
            This is a social platform that connects farmers from across the
            different religion.
          </p>
          <div className="primary-actions-btn">
            <button>
              <a href="https://shambashapeup.netlify.app/">View Project</a>
            </button>
            <button>
              <a
                href="https://github.com/Murage-Ivy/Shamba-ShapeUp"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>
            </button>
          </div>
        </div>
        <div className="project-card">
          <div className="img">
            <img src="../assets/Images/handyman.jpg" alt="handyman" />
          </div>
          <p>
            This is an application that connects handymen to people who are need
            of handymen services
          </p>
          <div className="primary-actions-btn">
            <button>
              <a href="https://chapakazi-frontend.vercel.app/">View Project</a>
            </button>
            <button>
              <a
                href=" https://github.com/Murage-Ivy/chapakazi-frontend"
                target="_blank"
                rel="noreferrer"
              >
                View Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
