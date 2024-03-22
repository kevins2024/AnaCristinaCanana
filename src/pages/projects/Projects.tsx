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
  const hrefPre = "/#";

  function handleClick(url: string) {
    navigate(url);
  }

  return (
    <div className="projects-content content-panel">
      <div className="projects-layout">
        <div className="project-preview-row">
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
          <button className="button-image" onClick={() => handleClick(hrefOrb)}>
            <img src={orbImage} className="project-preview-row-item" />
          </button>
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
          <a className="project-preview-row-item" href={hrefPre + hrefTaqueria}>
            Read More
          </a>
          <a className="project-preview-row-item" href={hrefPre + hrefMeet}>
            Read More
          </a>
          <a className="project-preview-row-item" href={hrefPre + hrefOrb}>
            Read More
          </a>
        </div>
        <div style={{ height: "8vh" }}></div>
      </div>
    </div>
  );
}

export default Projects;
