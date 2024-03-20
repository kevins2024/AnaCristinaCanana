import "./Projects.css";
import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import { ProjectNames, ProjectText } from "./ProjectText";

function Projects() {
  return (
    <div className="projects-content content-panel">
      <div className="projects-layout">
        <div className="project-preview-row">
          <img src={taqueriaImage} className="project-preview-row-item" />
          <img src={meetImage} className="project-preview-row-item" />
          <img src={orbImage} className="project-preview-row-item" />
        </div>
        <div style={{ height: "2vh" }}></div>
        <div className="project-preview-row">
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.TAQUERIA]}
          </span>
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.MEET]}
          </span>
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.ORB]}
          </span>
        </div>
        <div style={{ height: "1vh" }}></div>
        <div className="project-preview-row">
          <a className="project-preview-row-item" href="/#/projects/taqueria">
            Read More
          </a>
          <a className="project-preview-row-item" href="/#/projects/meet">
            Read More
          </a>
          <a className="project-preview-row-item" href="/#/projects/myorb">
            Read More
          </a>
        </div>
        <div style={{ height: "8vh" }}></div>
      </div>
    </div>
  );
}

export default Projects;
