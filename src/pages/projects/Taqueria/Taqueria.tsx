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
import persona01 from "./assets/personaPlaceholder01.png";
import persona02 from "./assets/personaPlaceholder02.png";
import storyboard01 from "./assets/05_storyboard_1.jpeg";
import storyboard02 from "./assets/06_storyboard_2.jpeg";
import userJourney from "./assets/07_user_journey_map.jpg";
import wireframe01 from "./assets/paper_wireframe01.jpg";
import wireframe02 from "./assets/paper_wireframe02.jpg";
import wireframe03 from "./assets/paper_wireframe03.jpg";
import wireframe04 from "./assets/paper_wireframe04.jpg";
import wireframe05 from "./assets/paper_wireframe05.jpg";
import wireframe06 from "./assets/paper_wireframe06.jpg";
import wireframe07 from "./assets/paper_wireframe07.jpg";
import wireframe08 from "./assets/paper_wireframe08.jpg";
import lowFidelityProto from "./assets/lowFidelityPrototype.jpg";
import mobileHomePage from "./assets/16homeMobile.jpg";
import arrowRightAlt from "./assets/arrow_right_alt_FILL0_wght400_GRAD0_opsz24.svg";
import arrowLeftAlt from "./assets/arrow_left_alt_FILL0_wght400_GRAD0_opsz24.svg";
import menuWithReturnShown from "./assets/17_menu.webp";
import usabilityPlaceholder from "./assets/placeholderUsabilityStudy.png";

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
      {/* todo make this a component */}
      <img src={placeholder01} style={{ maxWidth: "50%" }} />
      <ProjectContent
        title="Personas"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The following are two of the personas that were created.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: persona01,
          },
          {
            type: ProjectContentType.IMAGE,
            data: persona02,
          },
        ]}
      />
      <ProjectContent
        title="Storyboard"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The photos below show the storyboard of a potential user and how their usage of the app could look.",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The first photo shows the user before and after using the product and their experience at a high level. The focus is on their needs, context, and why the product would be useful for them. They are represented as someone working from an office or home office who does not have time to drive to the taco truck, wait in line, eat, and return to their workstation.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: storyboard01,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The second storyboard focuses more close-up on the product, showing steps that would all this same user to accomplish their goals.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: storyboard02,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Based on these sequences I was able to create a journey map that would be the foundation for starting to ideate paper wireframes.",
          },
        ]}
      />
      <ProjectContent
        title="User Journey Map"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The user journey map was created with the objective of showing what steps would be needed for users to accomplish their goal. The maps shows the steps clearly, shows that only a few steps are needed for each task, and the navigation through the website or app.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: userJourney,
          },
        ]}
      />
      <ProjectContent
        title="Paper Wireframe"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "After having a clear idea of the journey map, I started to sketch and experiment with paper designs. I used techniques like Crazy Eights and Ideate. The picture below represent the final proposition.",
          },
        ]}
      />
      <br />
      {/* todo this may become a grid component */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20% 20% 20% 20%",
          width: "80%",
          gap: "1%",
          marginLeft: "12%", // not sure why this is 12%
        }}
      >
        <img style={{ maxWidth: "100%" }} src={wireframe01} />
        <img style={{ maxWidth: "100%" }} src={wireframe02} />
        <img style={{ maxWidth: "100%" }} src={wireframe03} />
        <img style={{ maxWidth: "100%" }} src={wireframe04} />
        <img style={{ maxWidth: "100%" }} src={wireframe05} />
        <img style={{ maxWidth: "100%" }} src={wireframe06} />
        <img style={{ maxWidth: "100%" }} src={wireframe07} />
        <img style={{ maxWidth: "100%" }} src={wireframe08} />
      </div>
      <ProjectContent
        title="Low Fidelity Prototype"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Once the paper wireframes were established, I started the low fidelity protoype.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: lowFidelityProto,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Below is an example of the home page for the mobile app. With this layout we seek to solve one of the pain points: it takes too long to place an order. The menu is placed right in the center and users also have quick access to favorite meals and previous orders giving multiple ways to quickly place an order.",
          },
        ]}
      />
      {/* todo this is a cool layout, need to make a component for it with more absolute arrow positioning */}
      <br />
      <div style={{ display: "flex", width: "80%" }}>
        <div style={{ width: "22%" }}>
          Profile and cart buttons are always easy to locate
        </div>
        <div style={{ width: "5%", paddingTop: "2%" }}>
          <img src={arrowRightAlt} style={{ width: "100%" }} />
        </div>
        <img
          style={{ backgroundColor: "red", maxWidth: "44%" }}
          src={mobileHomePage}
        />
        <div style={{ width: "5%", alignSelf: "end", paddingBottom: "8%" }}>
          <img src={arrowLeftAlt} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "22%", alignSelf: "end", paddingBottom: "5%" }}>
          Home page also displays the previous orders and allows customer to add
          it to the cart with a single click or tap.
        </div>
      </div>
      <br />
      <div style={{ width: "80%" }} className="project-content-paragraph">
        After the customer selects a meal from the menu, all ingredients are in
        one section. They can select addons and quantities with separate
        sections for drinks, desserts, and special instructions necessary for
        their meal.
      </div>
      <br />
      <div style={{ display: "flex", width: "80%" }}>
        <div style={{ minWidth: "22%" }}></div>
        <div style={{ minWidth: "5%" }}></div>
        <img
          style={{ backgroundColor: "red", width: "44%" }}
          src={menuWithReturnShown}
        />
        <div style={{ minWidth: "5%", alignSelf: "end", paddingBottom: "2%" }}>
          <img src={arrowLeftAlt} style={{ width: "100%" }} />
        </div>
        <div style={{ minWidth: "22%", alignSelf: "end", paddingBottom: "2%" }}>
          The user is also able to exit this page and go back to the menu if
          they want to completely change the meal being ordered.
        </div>
      </div>
      <ProjectContent
        title="Usability Study"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "I conducted two moderated usability studies to determine if users can complete core tasks without being bilingual (the prototype was English only at this point) but with the help of visual cues instead of text. Further, I wanted to determine the overall difficulty of navigating the app. All participants have full-time remote jobs and they usually order food at lunchtime. None were bilingual but all love hispanic food. Half the study participants were hispanic and half were caucasian.",
          },
          { type: ProjectContentType.IMAGE, data: usabilityPlaceholder },
        ]}
      />
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
