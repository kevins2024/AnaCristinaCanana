import { Fragment } from "react";
import "./ProjectContent.css"; // todo import this somewhere else so it isn't imported many times
import SpacerVertical from "./SpacerVertical";

export default function ProjectContent(props: ProjectContentProps) {
  const { content, title } = props;

  return (
    <div className="project-content-parent">
      <SpacerVertical />
      <div className="project-content-title">{title}</div>
      {content.map((item, index) => {
        return (
          <Fragment key={index}>
            <SpacerVertical />
            {item.type == ProjectContentType.IMAGE && (
              <img className="project-content-image" src={item.data} />
            )}
            {item.type == ProjectContentType.PARAGRAPH && (
              <div className="project-content-paragraph">{item.data}</div>
            )}
          </Fragment>
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
