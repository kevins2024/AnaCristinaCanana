import "./ProjectPreview.css";

function ProjectPreview(props: any) {
  return (
    <div className="project-preview-layout">
      <div>
        <img className="project-preview-image" src={props.image} />
      </div>
      <div className="project-preview-text">{props.text}</div>
    </div>
  );
}

export default ProjectPreview;

// type ProjectPreviewProps {

// }
