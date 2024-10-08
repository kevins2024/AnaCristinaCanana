import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import PageBottom from "../../../components/PageBottom";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import ProjectFacts from "../../../components/ProjectFacts";
import SpacerVertical from "../../../components/SpacerVertical";
import SubHeading from "../../../components/SubHeading";
import images from "./assets";
import "./Meet.css";

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
      <ProjectContent
        title="Project Overview"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "MEET is a social goods app and responsive website that would connect local women from Lisbon with new women residents who are planning to settle down in Portugal.",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The goal of MEET is to provide a safe place for women to connect with other women who are interested in preserving Lisbon's traditions and culture. Here, women can meet locals, look for groups of interest, create and be a part of cultural and recreational events while learning the essence of being a Lisboeta. Of course, it could be expanded to other cities in the future.",
          },
        ]}
      />
      <SpacerVertical />
      <div className="meet-project-facts-container">
        <ProjectFacts
          titles={["Project Duration:", "Responsibilities:", "Role:", "Tools:"]}
          values={[
            "February to July 2023",
            "Plan, design, execute design, user test, and iterate through wireframe, low fidelity, high fidelity, until finally the completed design",
            "UX designer, student",
            "Adobe Xd",
          ]}
        />
      </div>
      <ProjectContent
        title="User Research"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Starting off, I asked myself initial questions. What is the problem we want to solve? What is the process and what emotions do our users experience at the time of trying to connect with a new town or new people in town? What are the common behaviors? What are the frustrations?",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "After an initial interview of five female expats and five locals from Lisbon I gathered enough information to create the personas and have a bigger picture understanding of the problems.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.painpoint1,
          },
        ]}
      />
      <ProjectContent
        title="Personas"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.persona1,
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.persona2,
          },
        ]}
      />
      <ProjectContent
        title="Competitive Audit"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The competitive audit gave me the necessary information to understand where MEET would sit in the market. MEET does not have a direct competitor but has big indirect competitors who are successful worldwide.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.competitiveAudit,
          },
        ]}
      />
      <ProjectContent
        title="Ideation"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "My goal at the ideation process was to design an app that will allow the user to meet and interact with another person with the same goals. Also, I wanted to give them quick access to the calendar and cultural activities that are offered.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.ideation,
          },
        ]}
      />
      <ProjectContent
        title="User Journey Map"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The user journey map was created with the objective of giving the app an organized structure to allow easy navigation for users. Every section has been carefully placed to fulfill the main app goals.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.userJourneyMap,
          },
        ]}
      />
      <ProjectContent
        title="Paper Wireframe"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "After having a clear structure and main functions of the app mapped, I started sketching ideas and choosing features that felt more user friendly.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.paperWireframe,
          },
        ]}
      />
      <ProjectContent
        title="Low-fidelity Prototype"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The user flow in this app was created based on the priority order for the functions that the app provides.",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The home page gives basic information and login access. After login, a landing page shows events, calendar, and access to the 'meet people' section of the app.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.lowfidelityPrototype,
          },
        ]}
      />
      <ProjectContent
        title="Usability Study"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.usabilityStudy,
          },
        ]}
      />
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">Mockups</div>
      </div>
      <SpacerVertical />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "28% 28% 28%",
          width: "var(--content-width-full)",
          gap: "1%",
          marginLeft: "12%",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.mockup1} />
        <img style={{ maxWidth: "100%" }} src={images.mockup2} />
        <img style={{ maxWidth: "100%" }} src={images.mockup3} />
        <img style={{ maxWidth: "100%" }} src={images.mockup4} />
        <img style={{ maxWidth: "100%" }} src={images.mockup5} />
        <img style={{ maxWidth: "100%" }} src={images.mockup6} />
      </div>
      <ProjectContent
        title="High-fidelity Prototype"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.highfidelityPrototype,
          },
        ]}
      />
      <ProjectContent
        title="Accessibility Considerations"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.accessibility,
          },
        ]}
      />
      <SpacerVertical />
      <SpacerVertical />
      <h2>RESPONSIVE WEB DESIGN</h2>
      <ProjectContent
        title="Paper Wireframe"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "For the responsive web design I took the primary research study and personas that were already created as a base. The design here will incorporate elements from the mobile app for consistency, taking into consideration all basic elements and concepts.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.webPaperWireframe,
          },
        ]}
      />
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">Low-fidelity Prototype</div>
      </div>
      <SpacerVertical />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "28% 28% 28%",
          width: "var(--content-width-full-medium)",
          gap: "1%",
          marginLeft: "12%",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.lfp1} />
        <img style={{ maxWidth: "100%" }} src={images.lfp2} />
        <img style={{ maxWidth: "100%" }} src={images.lfp3} />
      </div>
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">Mockups</div>
      </div>
      <SpacerVertical />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "40% 40%",
          width: "var(--content-width-full-medium)",
          gap: "1%",
          marginLeft: "12%",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.webMockup1} />
        <img style={{ maxWidth: "100%" }} src={images.webMockup2} />
        <img style={{ maxWidth: "100%" }} src={images.webMockup3} />
        <img style={{ maxWidth: "100%" }} src={images.webMockup4} />
      </div>
      <SpacerVertical />
      <ProjectContent
        title="Usability Study"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Before the usability study, the buttons for matching were placed under the main image to make the process faster. After the study, it was shown that the app's purpose of connections through common interests and culture sharing was not well served by focusing on speed and first impressions. The matching buttons were moved to the bottom of the full profile.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.usabilityChanges1,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Next, a need of giving users access to group chats and events from the messages section was discovered. A tabbed view was created to accommodate this functionality.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.usabilityChanges2,
          },
        ]}
      />
      <ProjectContent
        title="High-fidelity Prototype"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.webHfp,
          },
        ]}
      />
      <ProjectContent
        title="Takeaways"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Biases are real. When you read about it you may think these sorts of behaviors are only for people who judge all the time or think they're always right. The truth is we all have them. No human is exempt. It is very easy to get used to your own designs and not notice little details or confusions because 'we know what we are doing.' Paying close attention to others' opinions is very valuable.",
          },
        ]}
      />
      <PageBottom
        heightRelativeToViewport={30}
        buttonText="Back to Projects"
        buttonUrl="/projects"
      />
    </div>
  );
}

export default Meet;
