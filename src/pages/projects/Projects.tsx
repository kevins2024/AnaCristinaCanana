import ProjectPreview from "./ProjectPreview";
import "./Projects.css";
import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import { ProjectNames, ProjectText } from "./ProjectText";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleClick = (uri: string) => {
    navigate(uri);
  };
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            onClick={() => handleClick("/projects/taqueria")}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <img src={taqueriaImage} style={{ width: "25vw" }} />
          </button>
          <img src={meetImage} style={{ width: "25vw", cursor: "pointer" }} />
          <img src={orbImage} style={{ width: "25vw", cursor: "pointer" }} />
        </div>
        <div style={{ height: "4vh" }}></div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <span style={{ width: "25vw", textAlign: "center" }}>
            {ProjectText[ProjectNames.TAQUERIA]}
          </span>
          <span style={{ width: "25vw", textAlign: "center" }}>
            {ProjectText[ProjectNames.MEET]}
          </span>
          <span style={{ width: "25vw", textAlign: "center" }}>
            {ProjectText[ProjectNames.ORB]}
          </span>
        </div>
        <div style={{ height: "10vh" }}></div>
      </div>
    </div>
  );
}

export default Projects;
