import ProjectPreview from "./ProjectPreview";
import "./Projects.css";
import taqueriaImage from "./assets/taqueria-preview.png";
import meetImage from "./assets/meet-preview.png";
import orbImage from "./assets/orb-preview.png";
import { ProjectNames, ProjectText } from "./ProjectText";

function Projects() {
  return (
    <div className="projects-content content-panel">
      {/* todo need these to all appear at the same vertical level */}
      <ProjectPreview
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
      />
    </div>
  );
}

export default Projects;
