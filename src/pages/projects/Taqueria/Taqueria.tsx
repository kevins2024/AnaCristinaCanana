import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import SubHeading from "../../../components/SubHeading";
import "./Taqueria.css";

import logoPic from "../../logos/assets/logo1.png";

function Taqueria() {
  return (
    <div className="content-panel taqueria-layout">
      <ComponentWrapper
        direction="column"
        isCentered
        child={
          <>
            <Heading className="taqueria-heading">
              The component with longer text that needs to wrap
            </Heading>
            <SubHeading>
              UX Design | Mobile Interactive Prototype | 2024
            </SubHeading>
          </>
        }
      />
      <ProjectContent
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: logoPic,
          },
        ]}
        title="Project Overview"
      />
    </div>
  );
}

export default Taqueria;
