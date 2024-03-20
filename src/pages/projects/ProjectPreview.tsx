import { useNavigate } from "react-router";
import "./ProjectPreview.css";

function ProjectPreview(props: ProjectPreviewProps) {
  return (
    <div className="project-preview-layout">
      <div className="project-preview-top-spacing"></div>
      <img className="project-preview-image" src={props.image} />
      <div className="project-preview-middle-spacing"></div>
      <div className="project-preview-text">
        {props.text}
        <br />
        <a href={"/#" + props.url}>Read More</a>
      </div>
      <div className="project-preview-bottom-spacing"></div>
    </div>
  );
}

type ProjectPreviewProps = {
  image: string;
  text: string;
  url: string;
};

export default ProjectPreview;
