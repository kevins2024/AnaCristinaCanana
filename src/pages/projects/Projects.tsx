import "./Projects.css";

import { ProjectsData } from "./ProjectData";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects-content content-panel">
      <div className="projects-layout">
        {/* todo: make a component for spacer that accepts the height */}
        {/* todo: enforce the order */}
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
      <div
        className="vertical-spacer"
        style={{ minHeight: "10vh", width: "100px" }}
      ></div>
    </div>
  );
}

export default Projects;
