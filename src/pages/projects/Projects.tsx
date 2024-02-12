import ProjectPreview from "../../components/ProjectPreview";
import "./Projects.css";
import image1 from "../../assets/projects/meet/238shots_so.png";
import image2 from "../../assets/projects/meet/712shots_so.png";
import image3 from "../../assets/projects/meet/199shots_so.png";

function Projects() {
  return (
    <div className="projects-content content-panel">
      <div>
        <ProjectPreview image={image1} text="this is project 1 text" />
      </div>
      <div>
        <ProjectPreview image={image2} text="this is project 2 text" />
      </div>
      <div>
        <ProjectPreview
          image={image3}
          text="this is project 3 text and it is very long yes it is and it jus tkeeps going"
        />
      </div>
    </div>
  );
}

export default Projects;
