import { useNavigate } from "react-router-dom";
import "./Project.css";
import { ProjectData } from "./ProjectData";

function Project(props: Omit<ProjectData, "order">) {
  const navigate = useNavigate();

  function handleClick(url: string) {
    navigate(url);
  }
  return (
    <div className="project-preview-container">
      <img className="project-preview-image" src={props.image} />
      <span className="project-preview-text">{props.text}</span>
      <button
        onClick={() => handleClick(props.url)}
        className="primary-button project-button"
      >
        Read More
      </button>
    </div>
  );
}

export default Project;
