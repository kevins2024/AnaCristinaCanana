import "./ProjectPreview.css";

function ProjectPreview(props: any) {
  return (
    <div className="project-preview-layout">
      <div className="project-preview-top-spacing"></div>
      <img className="project-preview-image" src={props.image} />
      <div className="project-preview-middle-spacing"></div>
      <div className="project-preview-text">{props.text}</div>
      <div className="project-preview-bottom-spacing"></div>
    </div>
  );
}

export default ProjectPreview;
