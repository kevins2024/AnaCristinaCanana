import "./ProjectContent.css";

export default function ProjectContent(props: ProjectContentProps) {
  const { content, title } = props;

  return (
    <div className="project-content-parent">
      <br />
      <div className="project-content-title">{title}</div>
      {content.map((item, index) => {
        return (
          <>
            <br />
            {item.type == ProjectContentType.IMAGE && (
              <img
                className="project-content-image"
                key={index}
                src={item.data}
              />
            )}
            {item.type == ProjectContentType.PARAGRAPH && (
              <div className="project-content-paragraph" key={index}>
                {item.data}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

type ProjectContentProps = {
  content: ProjectContentItem[];
  title?: string;
};

type ProjectContentItem = {
  type: ProjectContentType;
  data: string;
};

export enum ProjectContentType {
  PARAGRAPH,
  IMAGE,
}
