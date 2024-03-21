import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import SubHeading from "../../../components/SubHeading";

import images from "./assets";

function Taqueria() {
  return (
    <div className="content-panel project-content-layout ">
      {/* Move the ComponentWrapper inside the heading and subheading place */}
      <ComponentWrapper
        direction="column"
        isCentered
        child={
          <>
            <Heading className="project-content-heading">
              Taqueria Express App and Responsive Web Design
            </Heading>
            <SubHeading>UX Design | Interactive Prototypes | 2022</SubHeading>
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
            data: images.image02WebHomePage,
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
      <img src={images.placeholder01} className="project-content-image-small" />
      <ProjectContent
        title="Personas"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The following are two of the personas that were created.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.persona01,
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.persona02,
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
            data: images.storyboard01,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The second storyboard focuses more close-up on the product, showing steps that would all this same user to accomplish their goals.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.storyboard02,
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
            data: images.userJourney,
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
          width: "var(--content-width-full-medium)",
          gap: "1%",
          marginLeft: "12%", // not sure why this is 12%
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.wireframe01} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe02} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe03} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe04} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe05} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe06} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe07} />
        <img style={{ maxWidth: "100%" }} src={images.wireframe08} />
      </div>
      <br />
      <ProjectContent
        title="Low Fidelity Prototype"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Once the paper wireframes were established, I started the low fidelity protoype.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.lowFidelityProto,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Below is an example of the home page for the mobile app. With this layout we seek to solve one of the pain points: it takes too long to place an order. The menu is placed right in the center and users also have quick access to favorite meals and previous orders giving multiple ways to quickly place an order.",
          },
        ]}
      />
      {/* todo this is a cool layout, need to make a component for it with more absolute arrow positioning */}
      <br />
      <div
        style={{ display: "flex", width: "var(--content-width-full-medium)" }}
      >
        <div
          style={{
            width: "22%",
            fontSize: "10pt",
            textAlign: "right",
            paddingTop: "1vh",
          }}
        >
          Profile and cart buttons are always easy to locate
        </div>
        <div style={{ width: "5%", paddingTop: "2%" }}>
          <img src={images.arrowRightAlt} style={{ width: "100%" }} />
        </div>
        <img style={{ maxWidth: "36%" }} src={images.mobileHomePage} />
        <div style={{ width: "5%", alignSelf: "end", paddingBottom: "8%" }}>
          <img src={images.arrowLeftAlt} style={{ width: "100%" }} />
        </div>
        <div
          style={{
            width: "22%",
            alignSelf: "end",
            paddingBottom: "5%",
            fontSize: "10pt",
          }}
        >
          Home page also displays the previous orders and allows customer to add
          it to the cart with a single click or tap.
        </div>
      </div>
      <br />
      <div
        style={{ width: "var(--content-width-full-medium)" }}
        className="project-content-paragraph"
      >
        After the customer selects a meal from the menu, all ingredients are in
        one section. They can select addons and quantities with separate
        sections for drinks, desserts, and special instructions necessary for
        their meal.
      </div>
      <br />
      <div
        style={{ display: "flex", width: "var(--content-width-full-medium)" }}
      >
        <div style={{ minWidth: "22%" }}></div>
        <div style={{ minWidth: "5%" }}></div>
        <img
          style={{ backgroundColor: "red", width: "36%" }}
          src={images.menuWithReturnShown}
        />
        <div style={{ minWidth: "5%", alignSelf: "end", paddingBottom: "2%" }}>
          <img src={images.arrowLeftAlt} style={{ width: "100%" }} />
        </div>
        <div
          style={{
            minWidth: "22%",
            alignSelf: "end",
            paddingBottom: "2%",
            fontSize: "10pt",
          }}
        >
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
          { type: ProjectContentType.IMAGE, data: images.usabilityPlaceholder },
        ]}
      />
      <br />
      <br />
      <div
        style={{ alignSelf: "flex-start", marginLeft: "10%" }}
        className="project-content-title"
      >
        Mockups
      </div>
      <br />
      <div // copy paste from above grid
        style={{
          display: "grid",
          gridTemplateColumns: "20% 20% 20% 20%",
          width: "var(--content-width-full-medium)",
          gap: "1%",
          marginLeft: "12%",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={images.mockup1} />
        <img style={{ maxWidth: "100%" }} src={images.mockup2} />
        <img style={{ maxWidth: "100%" }} src={images.mockup3} />
        <img style={{ maxWidth: "100%" }} src={images.mockup4} />
      </div>
      <ProjectContent
        title="High-fidelity Prototype"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.highFidelityPrototype,
          },
        ]}
      />
      <ProjectContent
        title="Accessibility Considerations"
        content={[
          {
            type: ProjectContentType.IMAGE,
            data: images.accessibilityConsiderations,
          },
        ]}
      />
      <br />
      <SubHeading>Responsive Web Design</SubHeading>
      <ProjectContent
        title="Refining the Design"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "For the responsive web design I took as a base the primary research study and the personas I created for the mobile app. The design was also made consistent with the look and feel of the mobile app, taking basic elements and concepts into consideration.",
          },
        ]}
      />
      <ProjectContent
        title="Paper Wireframe"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The layout of the webpage is divided in three sections. The first section was created to give the user a warm visual welcome. Lots of colors and vibrant, fresh vegetables are on display with the logo in the middle. On the top right I placed easy access to the menu link, language selection, and hamburger menu which contains less-frequenly used buttons. Scrolling down will also take the user to the core of the webpage: the menu. The third section is designed for the consumers engagement with Taqueria Express social media, contact information, and location.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.webWireFrame,
          },
        ]}
      />
      <ProjectContent
        title="Digital Wireframe"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Three variations are shown below. The first is web (assuming standard display size), next is a tablet view built around 12.9 inch iPad, and the third shown is for mobile built on a Google Pixel 6.",
          },
          { type: ProjectContentType.IMAGE, data: images.webDigitalWireframe },
        ]}
      />
      <ProjectContent
        title="Low-fidelity Prototype"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The user flow for this site was inspired by the order of the process in a line at a buffet. First, you are welcomed to the location before deciding which overall food area interests you. Next you can select individual ingredients, in this case it is proteins, vegetables, tortillas, etc. Finally, addons, drinks, and desserts are available. In the case of the app flow, you end with the option to review and change your order before finalizing it.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.webLowFidelityPrototype,
          },
        ]}
      />
      <ProjectContent
        title="Mockups"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "As shown in the prototypes, we can see a comparison of how the site would look on three different size devices.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.responsiveMockups,
          },
        ]}
      />
      <ProjectContent
        title="Usability Study"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "After finishing the low-fidelity prototype I executed the first usability study. There were five participants, all local to Charleston and clients of Taqueria Express. The study was unmoderated and lasted about 20-30 minutes.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.usabilityStudyPains,
          },
        ]}
      />
      <ProjectContent
        title="Usability Study"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "With the results of the usability study some new findings prompted design changes. A search function was added with a button at the top right as well as quick access to the bag.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.webHomeChanges,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "For better accessibility a logo was added to the center of the top bar which navigates back to the site homepage.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.webHomeChanges2,
          },
        ]}
      />
      <ProjectContent
        title="High-fidelity Prototype"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "High-fidelity prototypes for web and tablet layouts were finalized and updates were made to the mobile prototype for consistency.",
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.hifiWeb,
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.hifiTablet,
          },
          {
            type: ProjectContentType.IMAGE,
            data: images.hifiMobile,
          },
        ]}
      />
      <ProjectContent
        title="Takeaways"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "I feel extremely happy with the design because every single view has been created while thinking about inclusivity. In the entire process of creating, planning, and designing I was aware of accessibility considerations and I believe that will make a huge difference in the future of UX.",
          },
        ]}
      />

      <div style={{ minHeight: "40vh", visibility: "hidden" }}>hidden</div>
    </div>
  );
}

export default Taqueria;
