import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import {
  ProjectContentLayoutOneOne,
  ProjectContentLayoutOneTwo,
  ProjectContentLayoutThreeColumns,
} from "../../../components/ProjectContentLayouts";
import SubHeading from "../../../components/SubHeading";
import images from "./assets";

function Orb() {
  return (
    <div className="content-panel project-content-layout ">
      <ComponentWrapper
        direction="column"
        isCentered
        child={
          <>
            <Heading className="project-content-heading">
              My ORB, the Social Media Platform for Media Artists
            </Heading>
            <SubHeading>
              UX Design | Mobile Interactive Prototypes | 2024
            </SubHeading>
          </>
        }
      />
      <ProjectContent
        title="My Story with ORB"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "When I started my internship at Jemini, My ORB was already an idea with an initial design. The creators of the project have been working on the concept for several months and were able to create a few mockups to get started. After the initial meeting I fell in love with the concept and wanted to work on it right away! The team was amazing and cool, but I also would 100% be a user of this app.",
          },
        ]}
      />
      <ProjectContent
        title="Project Overview"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "My ORB is a social media platform for media artists that gather all existing content from the other social media platforms. The core of the app is facilitating searching across platforms and to skirt the algorithms in order to make smaller creator accounts easier to find. Also, there is an option for creators to share their content in a place where they won't be buried under viral or trending topics.",
          },
        ]}
      />
      <ProjectContentLayoutOneTwo
        left={<img style={{ maxWidth: "33vw" }} src={images.mobileHome} />}
        right={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              marginTop: "15vh",
              marginLeft: "5vw",
            }}
          >
            <div style={{ display: "flex", paddingBottom: "6px" }}>
              <div style={{ fontWeight: "bold", width: "40%" }}>
                Project Duration:
              </div>
              <div style={{ width: "60%" }}>May to September 2023</div>
            </div>
            <div style={{ display: "flex", paddingBottom: "6px" }}>
              <div style={{ fontWeight: "bold", width: "40%" }}>
                Responsibilities:
              </div>
              <div style={{ width: "60%" }}>
                {
                  "Plan, create, and execute mobile app design. Demo to stakeholders and iterate changes."
                }
              </div>
            </div>
            <div style={{ display: "flex", paddingBottom: "6px" }}>
              <div style={{ fontWeight: "bold", width: "40%" }}>Role:</div>
              <div style={{ width: "60%" }}>Lead UX Designer</div>
            </div>
            <div style={{ display: "flex", paddingBottom: "6px" }}>
              <div style={{ fontWeight: "bold", width: "40%" }}>Tools:</div>
              <div style={{ width: "60%" }}>Adobe Xd, Photoshop, Procreate</div>
            </div>
          </div>
        }
      />
      <ProjectContent
        title="Initial Research"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The first steps were a few meetings with the client to understand more deeply the concept of the product. I wanted to have a clear vision of the app they were in the process of creating. I did some furhter research to fundamentally understand similar products in the space. From these data I could understand and define the following points:",
          },
        ]}
      />
      <ProjectContentLayoutThreeColumns
        left={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">The Problem</div>
            <div style={{ textAlign: "center" }}>
              {
                "There is a gap between users and Media Creators. The gap is expanding as individual social media platforms become more competitive with algorithms favoring viral and trending content."
              }
            </div>
          </div>
        }
        center={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">The Goal</div>
            <div style={{ textAlign: "center" }}>
              {
                "Create an app that streamlines the way creative individuals can be discovered by both users and sponsors. This is done by combining all the work of creators across social media platforms into one space and avoiding those algorithms."
              }
            </div>
          </div>
        }
        right={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">Target Audience</div>
            <div style={{ textAlign: "center" }}>
              {
                "Social media creators and users who create unique content or wish to find it."
              }
            </div>
          </div>
        }
      />
      <ProjectContent
        title="Previous Mockups"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "When I started my internship the team already had a couple mockups that I took as an inspiration. We agreed that the color palette would remain the same, but for the rest I had the freedom to change as much as I wanted.",
          },
        ]}
      />
      <ProjectContentLayoutOneOne
        left={<img style={{ maxWidth: "35vw" }} src={images.previous1} />}
        right={<img style={{ maxWidth: "35vw" }} src={images.previous2} />}
      />
      <br />
      <SubHeading>Define</SubHeading>
      <ProjectContent
        title="Ideation"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "In the next few meetings, I planned different activities such as group brainstorming, making user journey maps, and researching for a competitive audit. The main points from these meetings were:",
          },
        ]}
      />
      <ul>
        <li>Ability to add stories to the main profile photo</li>
        <li>
          {
            "Space to add a summary of the creator trajectory and the option to read a more extensive biography of the creator"
          }
        </li>
        <li>
          A section where all the content from different platforms will be shown
          together
        </li>
        <li>
          Clean search section with the option to add suggestions if the user
          wants it
        </li>
        <li>
          Explore section where randomg suggestions for new content will appear
        </li>
      </ul>
      <ProjectContent
        title="Competitive Audit"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Our three most important competitors and their unique value propositions were:",
          },
        ]}
      />
      <ProjectContentLayoutThreeColumns
        left={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">IMDb</div>
            <div style={{ textAlign: "center" }}>
              {
                "An online database of information related to films, television series, podcasts, home videos, video games, and streaming online content."
              }
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>
                Their unique value proposition{" "}
              </span>
              is the concentration and variety of trustworthy information.
            </div>
          </div>
        }
        center={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">Pinterest</div>
            <div style={{ textAlign: "center" }}>
              {
                "A visual discovery engine for finding ideas like recipes, home and style inspiration, and more."
              }
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>
                Their unique value proposition{" "}
              </span>
              is the ability to inspire to create customized mood boards.
            </div>
          </div>
        }
        right={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">Zillow</div>
            <div style={{ textAlign: "center" }}>
              {
                "Our technology platform connects buyers, sellers, and renters with the people and services they need."
              }
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "bold" }}>
                Their unique value proposition{" "}
              </span>
              is complex search filters.
            </div>
          </div>
        }
      />
      <ProjectContent
        title="Sitemap"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "To understand the flow and organization of the app I created a site map. I wanted to focus on the essential content, organizing it by hierarchy and sequence.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.sitemap,
          },
        ]}
      />
      <ProjectContent
        title="Paper Wireframe"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "With all the information gathered, I sketched three options for two of the main sections of the mobile app. The intention with this was to understand the style and preferences in design that will help the vision of My ORB materialize. In a meeting we discussed which features would be added to the low-fidelity prototype and made some adjustments.",
          },
        ]}
      />
      <ProjectContent
        title="Options for Creator's Profiles"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.options1,
          },
        ]}
      />
      <ProjectContent
        title="Options for Home Page"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.options2,
          },
        ]}
      />
      <ProjectContent
        title="Options for Search"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.options3,
          },
        ]}
      />
      <div style={{ minHeight: "40vh", visibility: "hidden" }}>
        Hidden but allows some space at the bottom of the page for easier
        scrolling.
      </div>
    </div>
  );
}

export default Orb;
