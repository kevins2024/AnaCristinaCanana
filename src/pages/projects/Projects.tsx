import ProjectPreview from "./ProjectPreview";
import "./Projects.css";
import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import { ProjectNames, ProjectText } from "./ProjectText";

function Projects() {
  return (
    <div className="projects-content content-panel">
      {/* <ProjectPreview
        image={taqueriaImage}
        text={ProjectText[ProjectNames.TAQUERIA]}
        url="/projects/taqueria"
      />
      <ProjectPreview
        image={meetImage}
        text={ProjectText[ProjectNames.MEET]}
        url="/projects/meet"
      />
      <ProjectPreview
        image={orbImage}
        text={ProjectText[ProjectNames.ORB]}
        url="/projects/myorb"
      /> */}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ height: "10vh" }}></div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={taqueriaImage} style={{ width: "25vw" }} />
          <img src={meetImage} style={{ width: "25vw" }} />
          <img src={orbImage} style={{ width: "25vw" }} />
        </div>
        <div style={{ height: "4vh" }}></div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span style={{ width: "25vw" }}>
            {ProjectText[ProjectNames.TAQUERIA]}
          </span>
          <span style={{ width: "25vw" }}>
            {ProjectText[ProjectNames.MEET]}
          </span>
          <span style={{ width: "25vw" }}>{ProjectText[ProjectNames.ORB]}</span>
        </div>
        <div style={{ height: "10vh" }}></div>
      </div>
    </div>
  );
}

export default Projects;
