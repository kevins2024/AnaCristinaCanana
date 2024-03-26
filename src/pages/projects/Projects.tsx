import "./Projects.css";
import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import { ProjectNames, ProjectText } from "./ProjectText";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const hrefTaqueria = "/projects/taqueria";
  const hrefMeet = "/projects/meet";
  const hrefOrb = "/projects/myorb";

  function handleClick(url: string) {
    navigate(url);
  }

  return (
    <div className="projects-content content-panel">
      <div className="projects-layout">
        <div className="project-preview-row">
          <button className="button-image" onClick={() => handleClick(hrefOrb)}>
            <img src={orbImage} className="project-preview-row-item" />
          </button>
          <button
            className="button-image"
            onClick={() => handleClick(hrefTaqueria)}
          >
            <img src={taqueriaImage} className="project-preview-row-item" />
          </button>
          <button
            className="button-image"
            onClick={() => handleClick(hrefMeet)}
          >
            <img src={meetImage} className="project-preview-row-item" />
          </button>
        </div>
        <div style={{ height: "2vh" }}></div>
        <div className="project-preview-row">
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.ORB]}
          </span>
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.TAQUERIA]}
          </span>
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.MEET]}
          </span>
        </div>
        <div style={{ height: "2vh" }}></div>
        <div className="project-preview-row">
          <button
            className="project-preview-row-item primary-button"
            onClick={() => handleClick(hrefOrb)}
          >
            Read More
          </button>
          <button
            className="project-preview-row-item primary-button"
            onClick={() => handleClick(hrefTaqueria)}
          >
            Read More
          </button>
          <button
            className="project-preview-row-item primary-button"
            onClick={() => handleClick(hrefMeet)}
          >
            Read More
          </button>
        </div>
        <div style={{ height: "8vh" }}></div>
      </div>
    </div>
  );
}

export default Projects;
