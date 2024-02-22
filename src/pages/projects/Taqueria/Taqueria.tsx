import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import SubHeading from "../../../components/SubHeading";
import "./Taqueria.css";

import logoPic from "../../logos/assets/logo1.png";
import ProjectContentLayoutOneTwo from "../../../components/ProjectContentLayouts";

function Taqueria() {
  return (
    <div className="content-panel taqueria-layout">
      {/* Move the ComponentWrapper inside the heading and subheading place */}
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
        title="Project Overview"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: logoPic,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "this is a string of content. I hope it is super good.",
          },
        ]}
      />
      <ProjectContentLayoutOneTwo
        left={<>this is the left content</>}
        right={
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>internal child one</div>
              <div>internal child two</div>
            </div>
          </>
        }
      />
      <div style={{ minHeight: "40vh", visibility: "hidden" }}>hidden</div>
    </div>
  );
}

export default Taqueria;
