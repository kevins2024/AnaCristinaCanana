export default function ProjectContent(props: ProjectContentProps) {
  const { content, title } = props;

  return (
    <>
      <div>{title}</div>
      {content.map((item, index) => {
        return (
          item.type == ProjectContentType.IMAGE && (
            <img key={index} src={item.data} />
          )
        );
      })}
    </>
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
