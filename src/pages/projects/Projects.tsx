import "./Projects.css";
import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import vetImage from "./assets/pocket-vet-preview.png";
import { ProjectNames, ProjectText } from "./ProjectText";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const hrefTaqueria = "/projects/taqueria";
  const hrefMeet = "/projects/meet";
  const hrefOrb = "/projects/myorb";
  const hrefVet = "/project/pocketvet";

  function handleClick(url: string) {
    navigate(url);
  }

  return (
    // todo: is there another way to lay these out? or programmatically add items from a list?
    <div className="projects-content content-panel">
      <div className="projects-layout">
        {/* todo: make a component for spacer that accepts the height */}
        <div className="flex-spacer" style={{ height: "12vh" }}></div>
        <div className="project-preview-row">
          <button className="button-image" onClick={() => handleClick(hrefVet)}>
            <img src={vetImage} className="project-preview-row-item" />
          </button>
          <button
            className="button-image"
            onClick={() => handleClick(hrefTaqueria)}
          >
            <img src={taqueriaImage} className="project-preview-row-item" />
          </button>
          <button className="button-image" onClick={() => handleClick(hrefOrb)}>
            <img src={orbImage} className="project-preview-row-item" />
          </button>
        </div>
        <div className="flex-spacer" style={{ height: "2vh" }}></div>
        <div className="project-preview-row">
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.VET]}
          </span>
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.TAQUERIA]}
          </span>
          <span className="project-preview-row-item">
            {ProjectText[ProjectNames.ORB]}
          </span>
        </div>
        <div className="flex-spacer" style={{ height: "2vh" }}></div>
        <div className="project-preview-row">
          <button
            className="project-preview-row-item primary-button"
            onClick={() => handleClick(hrefVet)}
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
            onClick={() => handleClick(hrefOrb)}
          >
            Read More
          </button>
        </div>
        <div className="flex-spacer" style={{ height: "4vh" }}></div>
        <div className="project-preview-row">
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
            {ProjectText[ProjectNames.MEET]}
          </span>
        </div>
        <div className="flex-spacer" style={{ height: "2vh" }}></div>
        <div className="project-preview-row">
          <button
            className="project-preview-row-item primary-button"
            onClick={() => handleClick(hrefMeet)}
          >
            Read More
          </button>
        </div>
        <div className="flex-spacer" style={{ height: "28vh" }}></div>
      </div>
    </div>
  );
}

export default Projects;
