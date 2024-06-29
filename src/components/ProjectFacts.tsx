import "./ProjectFacts.css";

export default function ProjectFacts(props: ProjectFactsProps) {
  const { titles, values } = props;
  return (
    <div className="project-facts-container">
      {titles.map((title, idx) => {
        return (
          <div className="project-facts-wrapper" key={idx}>
            <div className="project-facts-title">{title}</div>
            <div className="project-facts-value">{values[idx]}</div>
          </div>
        );
      })}
    </div>
  );
}

type ProjectFactsProps = {
  titles: String[];
  values: String[];
};
