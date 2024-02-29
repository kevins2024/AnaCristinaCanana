import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import SubHeading from "../../../components/SubHeading";
import images from "./assets"; // todo experimental, see if this is better than taqueria approach

function Meet() {
  return (
    <div className="content-panel project-content-layout">
      <ComponentWrapper
        direction="column"
        isCentered
        child={
          <>
            <Heading className="project-content-heading">
              MEET Mobile App and Responsive Web Design
            </Heading>
            <SubHeading>
              UX Research | UX Design | Interactive Prototypes | 2023
            </SubHeading>
          </>
        }
      />
      <ProjectContent
        title="My Story with MEET"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The impact of expats living in Portugal is very notorious in the capital; things are changing and locals are expressing concern about losing their traditions and customs. More and more single women are choosing Portugal as their home and groups for women-only expats are quickly growing in the area. The idea of MEET came from the hope that there is a way to help expats and locals connect and interact in order to break down these divisions before they fully form.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.image1,
          },
        ]}
      />
    </div>
  );
}

export default Meet;
