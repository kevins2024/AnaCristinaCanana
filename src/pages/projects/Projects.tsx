import ProjectPreview from "../../components/ProjectPreview";
import "./Projects.css";
import taqueriaImage from "../../assets/projects/taqueria-express/taqueria-preview.png";
import meetImage from "../../assets/projects/meet/meet-preview.png";
import orbImage from "../../assets/projects/orb/orb-preview.png";
import { ProjectNames, ProjectText } from "../../assets/projects/ProjectText";

function Projects() {
  return (
    <div className="projects-content content-panel">
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
