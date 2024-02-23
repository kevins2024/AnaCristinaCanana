import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import SubHeading from "../../../components/SubHeading";
import "./Taqueria.css";
import {
  ProjectContentLayoutOneOne,
  ProjectContentLayoutOneTwo,
  ProjectContentLayoutThreeColumns,
} from "../../../components/ProjectContentLayouts";

import image02WebHomePage from "./assets/02_web_home_page.png";
import placeholder01 from "./assets/placeholder01.png";

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
              Taqueria Express App and Responsive Web Design
            </Heading>
            <SubHeading>
              UX Design | Mobile Interactive Prototype | 2022
            </SubHeading>
          </>
        }
      />
      <ProjectContent
        title="My Story with Taqueria Express"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The Taqueria Express responsive web and mobile app design was my first project as a student in Google's UX course. Taqueria Express is one of my favorite authentic Mexican food spots in Charleston, South Carolina. Their popularity has been growing with the years and, as a result, the demand for amazing tacos as well.",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "At lunchtime the wait could go up to an hour some days. Since I was a frequent customer it was very easy for me to socialize with other in the same long wait and hear (and express) the same complaint. These became the potential users of my app design. When I had to choose my first project for the course my immediate thought was 'I never want to wait so long for Mexican food again, I can fix this!' That's how the project was born.",
          },
          {
            type: ProjectContentType.IMAGE, // todo add other hovering image here
            data: image02WebHomePage,
          },
        ]}
      />
      <ProjectContent
        title="Project Overview"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Taqueria Express responsive web and mobile app is a service that primarily allows users to order food from the Taqueria Express food truck. This food ordering service has been designed to help people order easily online to alleviate the wait times encountered when ordering in person. The secondary goal was to have a modern UI with friendly visual guidelines.",
          },
        ]}
      />
      {/* todo make a component */}
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>
            Project Duration:
          </div>
          <div style={{ width: "60%" }}>February 5th to August 3rd 2022</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>
            Responsibilities:
          </div>
          <div style={{ width: "60%" }}>
            Plan, design, execute design, user test, and iterate through
            wireframe, low fidelity, high fidelity, until finally the completed
            design
          </div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Role:</div>
          <div style={{ width: "60%" }}>UX designer, student</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Tools:</div>
          <div style={{ width: "60%" }}>Figma, Adobe Xd</div>
        </div>
      </div>
      <ProjectContent
        title="Primary Research"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Starting off, I asked myself initial questions. What is the problem we want to solve? What is the process and emotions that our users experience at the time of ordering food? What are the common user behaviors? What are their frustrations?",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "After interviewing ten active customers from Taqueria Express, pain points became more clear. Some of them were identified as able to fix and others as able to improve.",
          },
        ]}
      />
      <br />
      <img src={placeholder01} style={{ maxWidth: "50%" }} />
      {/* <ProjectContentLayoutOneTwo
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
      <ProjectContentLayoutThreeColumns
        left={<>this is the left content</>}
        center={<>this is center content asdf asdf qwerty</>}
        right={
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>internal child one</div>
              <div>internal child two</div>
            </div>
          </>
        }
      />
      <ProjectContentLayoutOneOne
        left={<>this is the left content 1-1</>}
        right={
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>internal child one-one</div>
              <div>internal child two</div>
            </div>
          </>
        }
      /> */}
      <div style={{ minHeight: "40vh", visibility: "hidden" }}>hidden</div>
    </div>
  );
}

export default Taqueria;
