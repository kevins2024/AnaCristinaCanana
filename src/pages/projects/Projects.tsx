import "./Projects.css";

import { ProjectsData } from "./ProjectData";
import SpacerVertical from "../../components/SpacerVertical";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects-content content-panel">
      <div className="projects-layout">
        {ProjectsData.map((proj) => (
          <Project
            name={proj.name}
            image={proj.image}
            text={proj.text}
            url={proj.url}
            key={proj.name}
          />
        ))}
      </div>
      <SpacerVertical sizeRelativeToViewport="10vh" />
    </div>
  );
}

export default Projects;
