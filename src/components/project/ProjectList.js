import React from 'react';

const ProjectList = () => {
  return(
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">

        <div className="card-content grey-text darken-3">
          <span className="card-title">Project Title</span>
          <p> Posted by the Ishwor</p>
          <p className="gray-text">1st January, 1PM</p>
        </div>

        <div className="card-content grey-text darken-3">
          <span className="card-title">Project Title 2</span>
          <p> Posted by the Ishwor</p>
          <p className="gray-text">1st January, 1PM</p>
        </div>

        <div className="card-content grey-text darken-3">
          <span className="card-title">Project Title 3</span>
          <p> Posted by the Ishwor</p>
          <p className="gray-text">1st January, 1PM</p>
        </div>

      </div>
    </div>
  )
}

export default ProjectList;
