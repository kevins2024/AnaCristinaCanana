import { Carousel } from "react-responsive-carousel";
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
import ProjectFacts from "../../../components/ProjectFacts";
import SpacerVertical from "../../../components/SpacerVertical";
import SubHeading from "../../../components/SubHeading";
import images from "./assets";
import "./Orb.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        left={<img style={{ maxWidth: "100%" }} src={images.mobileHome} />}
        right={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "var(--content-width-full-medium)",
            }}
          >
            <ProjectFacts
              titles={[
                "Project Duration:",
                "Responsibilities:",
                "Role:",
                "Tools:",
              ]}
              values={[
                "May to September 2023",
                "Plan, create, and execute mobile app design. Demo to stakeholders and iterate changes.",
                "Lead UX Designer",
                "Adobe Xd, Photoshop, Procreate",
              ]}
            />
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
          <div className="orb-column-layout">
            <div className="project-content-title">The Problem</div>
            <div className="orb-column-text">
              {
                "There is a gap between users and Media Creators. The gap is expanding as individual social media platforms become more competitive with algorithms favoring viral and trending content."
              }
            </div>
          </div>
        }
        center={
          <div className="orb-column-layout">
            <div className="project-content-title">The Goal</div>
            <div className="orb-column-text">
              {
                "Create an app that streamlines the way creative individuals can be discovered by both users and sponsors. This is done by combining all the work of creators across social media platforms into one space and avoiding those algorithms."
              }
            </div>
          </div>
        }
        right={
          <div className="orb-column-layout">
            <div className="project-content-title">Target Audience</div>
            <div className="orb-column-text">
              {
                "Social media creators and users who create unique content or wish to find it."
              }
            </div>
          </div>
        }
      />
      <SpacerVertical />
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
        left={<img style={{ maxWidth: "100%" }} src={images.previous1} />}
        right={<img style={{ maxWidth: "100%" }} src={images.previous2} />}
      />
      <SpacerVertical />
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
      <ul className="ul-seventy">
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
          <div className="orb-column-layout">
            <div className="project-content-title">IMDb</div>
            <div className="orb-column-text">
              {
                "An online database of information related to films, television series, podcasts, home videos, video games, and streaming online content."
              }
            </div>
            <SpacerVertical />
            <div>
              <span style={{ fontWeight: "bold" }}>
                Their unique value proposition{" "}
              </span>
              is the concentration and variety of trustworthy information.
            </div>
          </div>
        }
        center={
          <div className="orb-column-layout">
            <div className="project-content-title">Pinterest</div>
            <div className="orb-column-text">
              {
                "A visual discovery engine for finding ideas like recipes, home and style inspiration, and more."
              }
            </div>
            <SpacerVertical />
            <div>
              <span style={{ fontWeight: "bold" }}>
                Their unique value proposition{" "}
              </span>
              is the ability to inspire to create customized mood boards.
            </div>
          </div>
        }
        right={
          <div className="orb-column-layout">
            <div className="project-content-title">Zillow</div>
            <div className="orb-column-text">
              {
                "Our technology platform connects buyers, sellers, and renters with the people and services they need."
              }
            </div>
            <SpacerVertical />
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
      <SubHeading>Paper Wireframe</SubHeading>
      <div className="project-content-parent">
        <div className="project-content-paragraph">
          {
            "With all the information gathered, I sketched three options for two of the main sections of the mobile app. The intention with this was to understand the style and preferences in design that will help the vision of My ORB materialize. In a meeting we discussed which features would be added to the low-fidelity prototype and made some adjustments."
          }
        </div>
      </div>
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
      <SubHeading>Low-fidelity Prototype</SubHeading>
      <div className="project-content-parent">
        <a href="https://xd.adobe.com/view/e33496bf-38c5-4514-9fa5-8efd2a0d8feb-b667/">
          Interactive Low-fidelity Prototype on Xd
        </a>

        <SpacerVertical />
        <div className="project-content-paragraph">
          {
            "After the team analyzed the paper wireframe and chose the design elements they wanted to include, this project started to feel real! I started designing the low-fidelity prototype based on the wireframes with adjustments suggested by the team."
          }
        </div>
      </div>
      <SpacerVertical />
      <div className="orb-low-fidelity-slider">
        <Carousel showStatus={false} showThumbs={false} infiniteLoop>
          <img className="orb-low-fidelity-slider-image" src={images.lfp1} />
          <img className="orb-low-fidelity-slider-image" src={images.lfp2} />
          <img className="orb-low-fidelity-slider-image" src={images.lfp3} />
          <img className="orb-low-fidelity-slider-image" src={images.lfp4} />
          <img className="orb-low-fidelity-slider-image" src={images.lfp5} />
        </Carousel>
      </div>
      <div
        className="orb-low-fidelity-container"
        style={{
          gridTemplateColumns: "19% 19% 19% 19% 19%",
          width: "var(--content-width-full-medium)",
          gap: ".5%",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.lfp1} />
        <img style={{ maxWidth: "100%" }} src={images.lfp2} />
        <img style={{ maxWidth: "100%" }} src={images.lfp3} />
        <img style={{ maxWidth: "100%" }} src={images.lfp4} />
        <img style={{ maxWidth: "100%" }} src={images.lfp5} />
      </div>
      <SpacerVertical />
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">Usability Study</div>
      </div>
      <SpacerVertical />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Study type:</div>
          <div style={{ width: "60%" }}>Unmoderated usability study</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Location:</div>
          <div style={{ width: "60%" }}>US, remote</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Participants:</div>
          <div style={{ width: "60%" }}>5 participants</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Length:</div>
          <div style={{ width: "60%" }}>15-30 minutes</div>
        </div>
      </div>
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">Findings:</div>
      </div>
      <ul className="ul-seventy">
        <li>
          The welcome message takes too much space and distracts the user flow.
        </li>
        <li>
          {
            "The design of the search section is too busy and could be overwhelming. It also has some redundancies with the home page."
          }
        </li>
        <li>Navigation bar icons do not have the same size and dimension.</li>
        <li>
          {
            "Some sections do not have the 'Go Back' button or it is in inconsistent places."
          }
        </li>
      </ul>
      <SubHeading>High-fidelity Prototype</SubHeading>
      <ProjectContent
        title="Home Page"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Before the usability study the home page had a message to greet and welcome users. That message was removed to create a cleaner, less cluttered first impression.",
          },
        ]}
      />
      <ProjectContentLayoutOneOne
        left={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">Before Usability Study</div>
            <img style={{ maxWidth: "70%" }} src={images.lfp1} />
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
            <div className="project-content-title">After Usability Study</div>
            <img style={{ maxWidth: "70%" }} src={images.homeAfterStudy} />
          </div>
        }
      />
      <ProjectContent
        title="Search Page"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Before the usability study the search page contained redundancies and overwhelming with information. After the study, the search section is clean and lets the user make the choice if they want to see suggestions or only use the search and filter functions.",
          },
        ]}
      />
      <ProjectContentLayoutOneOne
        left={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="project-content-title">Before Usability Study</div>
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
            <div className="project-content-title">After Usability Study</div>
          </div>
        }
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "10% 24% 16% 24% 24%",
          width: "var(--content-width-full-medium)",
          gap: ".5%",
        }}
      >
        <div></div>
        <img style={{ maxWidth: "100%" }} src={images.lfp2} />
        <div></div>
        <img style={{ maxWidth: "100%" }} src={images.searchAfterStudy1} />
        <img style={{ maxWidth: "100%" }} src={images.searchAfterStudy2} />
      </div>
      <ProjectContent
        title="Mockups"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Below you can see the initial mockups presented by the client, followed by the new mockups.",
          },
        ]}
      />
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">Initial Mockups</div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "17.5% 28% 28% 17.5%",
          width: "var(--content-width-full-medium)",
          gap: "3%",
        }}
      >
        <div></div>
        <img style={{ maxWidth: "100%" }} src={images.oldMockup1} />
        <img style={{ maxWidth: "100%" }} src={images.oldMockup2} />
        <div></div>
      </div>
      <SpacerVertical />
      <div className="project-content-parent">
        <div className="project-content-title">New Mockups</div>
      </div>
      <SpacerVertical />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "23.5% 23.5% 23.5% 23.5%",
          width: "var(--content-width-full-medium)",
          gap: "2%",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.newMockup1} />
        <img style={{ maxWidth: "100%" }} src={images.newMockup2} />
        <img style={{ maxWidth: "100%" }} src={images.newMockup3} />
        <img style={{ maxWidth: "100%" }} src={images.newMockup4} />
      </div>
      <div className="project-content-parent">
        <SpacerVertical />
        <a href="https://xd.adobe.com/view/420d6c84-a3c9-4591-b7e2-006df704975a-175e/?fullscreen&hints=off">
          Interactive High-fidelity Prototype on Xd
        </a>
      </div>
      <ProjectContent
        title="Logo Redefined"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "On the left is the original logo and the right is the logo redefined. The lines are made thicker and solid with the goal of a clean and modern feeling. Instead of two shades of blue it is simplified to just one for enhanced uniformity.",
          },
        ]}
      />
      <SpacerVertical />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "17.5% 28% 28% 17.5%",
          width: "var(--content-width-full-medium)",
          gap: "3%",
        }}
      >
        <div></div>
        <img style={{ maxWidth: "100%" }} src={images.oldLogo} />
        <img
          style={{ maxWidth: "100%", backgroundColor: "#5C6B7A" }}
          src={images.newLogo}
        />
        <div></div>
      </div>
      <SpacerVertical />
      <ProjectContent
        title="Takeaways"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "As my first experience working with a real client and product, I discovered the value of working with a great team. A team where you can explore ideas freely and have a good dynamic between playing and focusing made a very positive impact on the design. Being the lead UX designer was a little bit scary but soon I felt very supported by the team and they were willing to work in the activities I recommended. I am happy and proud of the design, I like the sophistication and the easy access to the search options.",
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
