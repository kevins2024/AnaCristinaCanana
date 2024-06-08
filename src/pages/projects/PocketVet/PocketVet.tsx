import ComponentWrapper from "../../../components/ComponentWrapper.tsx";
import Heading from "../../../components/Heading.tsx";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import images from "./assets/index.ts";
import arrowLeft from "../Taqueria/assets/arrow_left_alt_FILL0_wght400_GRAD0_opsz24.svg";
import success from "./assets/check-circle-svgrepo-com.svg";
import warning from "./assets/warning-svgrepo-com.svg";
import info from "./assets/info-svgrepo-com.svg";
import error from "./assets/warning-circle-svgrepo-com.svg";

function PocketVet() {
  return (
    <div className="content-panel project-content-layout ">
      <ComponentWrapper
        isCentered
        child={
          <Heading className="project-content-heading">
            Pocket Vet Accessibility Consultation
          </Heading>
        }
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <br />
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>
            Project Duration:
          </div>
          <div style={{ width: "60%" }}>February to May 2024</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>
            Responsibilities:
          </div>
          <div style={{ width: "60%" }}>Review the application</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Role:</div>
          <div style={{ width: "60%" }}>UX Consultant</div>
        </div>
        <div style={{ display: "flex", paddingBottom: "6px" }}>
          <div style={{ fontWeight: "bold", width: "40%" }}>Tools:</div>
          <div style={{ width: "60%" }}>
            Figma and Web Content Accessibility Guide
          </div>
        </div>
      </div>
      <ProjectContent
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: `Pocket Vet Consult is an application designed to facilitate
              specialist veterinarians in providing consultations to general
              veterinarians encountering complex cases.`,
          },

          {
            type: ProjectContentType.PARAGRAPH,
            data: `I was brought onto the team to review the app and provide
              feedback. In this particular case I focused on accessibility. I
              concentrated on ensuring adherence to the Web Content
              Accessibility Guidelines (WCAG). What follows are my findings
              and recommendations.`,
          },

          {
            type: ProjectContentType.PARAGRAPH,
            data: `Accessibility modifications not only provide individuals with
              disabilities greater freedom to use the web and apps, but also
              enhance the overall user-friendliness and intuitiveness of the
              product for all users.`,
          },
        ]}
      />
      <ProjectContent
        title="Buttons Purposes"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Ensure that buttons have a clear purpose and accompanying text to assist users in making decisions. Action buttons consisting only of images without text can be challenging for screen readers and color-blind users to detect. Including descriptive text alongside images not only enhances accessibility but also promotes smoother navigation for all users.",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Before</p>
        <p style={{ fontWeight: "bold" }}>Suggested</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "var(--content-width-full)",
        }}
      >
        {/* todo need updated images here and align the text and arrow */}
        <div style={{ width: "37.5%" }}>
          <img src={images.image1} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "5%" }}>
          <img src={arrowLeft} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "20%", paddingRight: "15px" }}>
          <span style={{ fontWeight: "bold" }}>Note:</span> <br />
          This button should complement the body of the dialog.
        </div>
        <div style={{ width: "37.5%" }}>
          <img src={images.image2} style={{ width: "100%" }} />
        </div>
      </div>

      <ProjectContent
        title="Hovering"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Hover states are crucial for identifying buttons, links, and controls. They assist not only users with low vision or colorblindness but also general users in quickly identifying action items and avoiding confusion.",
          },
        ]}
      />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          width: "var(--content-width-full)",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "60%" }}>
          <img src={images.image3} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "5%" }}>
          <img src={arrowLeft} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "25%" }}>
          <span style={{ fontWeight: "bold" }}>Suggestion</span> <br />
          The icon for adding cases could be mistaken for a non-occasional
          button. Implementing a hover state and text would help clarify its
          function as an action button.
        </div>
      </div>
      <ProjectContent
        title="Status Indicators"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "To enhance accessibility and clarity for users, consider incorporating symbols like an exclamation mark or asterisk alongside red text to indicate errors. This not only aids users with color vision deficiencies but also ensures screen reader compatibility. Additionally, ensure that error messages are accessible to keyboard-only users by including them in the keyboard tab order. This way, screen readers can detect the error.",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "var(--content-width-full)",
          marginTop: "3vh",
        }}
      >
        <img src={images.image4} style={{ width: "35vw" }} />
        <div className="status-icon-container">
          <div className="status-icon-item" style={{ fontWeight: "bold" }}>
            Suggestion
          </div>
          <div
            className="status-icon-item status-icon-wrapper"
            style={{ backgroundColor: "#EBF6F2", borderColor: "#3CA07B" }}
          >
            <img src={success} className="pocketvet-icons" />
            <div>Invoice created successfully.</div>
          </div>
          <div
            className="status-icon-item status-icon-wrapper"
            style={{ backgroundColor: "#FDF6E9", borderColor: "#E9A720" }}
          >
            <img src={warning} className="pocketvet-icons" />
            <div>Hold on a second...</div>
          </div>
          <div
            className="status-icon-item status-icon-wrapper"
            style={{ backgroundColor: "#EAF1F6", borderColor: "#2676A5" }}
          >
            <img src={info} className="pocketvet-icons" />
            <div>Did you know you can do this?</div>
          </div>
          <div
            className="status-icon-item status-icon-wrapper"
            style={{ backgroundColor: "#FDEEEE", borderColor: "#E35256" }}
          >
            <img src={error} className="pocketvet-icons" />
            <div>It looks like something went wrong.</div>
          </div>
        </div>
      </div>
      <ProjectContent
        title="Tab Navigation"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Ensuring that all functionalities can be accessed from a keyboard is curcial for users who rely on keyboard navigation due to motor disabilities or other limitations. By enabling keyboard access to all functionalities, designers and developers ensure that their products are inclusive and usable for a wider range of users, promoting equal access and participation for all.",
          },
        ]}
      />
      <br />
      {/* todo change all fontweight: bold to h3 or smaller
      todo change all br tags to divs with spacing */}
      <div className="tab-navigation-container">
        <div style={{ width: "28%", alignSelf: "center" }}>
          <span style={{ fontWeight: "bold" }}>Suggestion</span>
          <br />
          The form is very easy to navigate using the touch screen. When it
          comes to navigating only with the keyboard, it presents an
          accessibility issue for users. For example, there is no way to attach
          files using only the keyboard.
        </div>
        <img
          src={arrowLeft}
          style={{
            width: "5%",
            WebkitTransform: "scaleX(-1)",
            transform: "scaleX(-1)",
            marginTop: "13%",
          }}
        />
        <img
          src={images.image6}
          style={{ width: "34%", height: "auto", objectFit: "contain" }}
        />
        <img src={arrowLeft} style={{ width: "5%", marginTop: "19%" }} />
        <div style={{ width: "28%", alignSelf: "flex-end" }}>
          <span style={{ fontWeight: "bold" }}>Suggestion</span>
          <br />
          The save button contrast, when selected by keyboard navigation, is
          very low compared with the contrast of the rest of the form.
          <br />
          This could potentially lead to user uncertainty about their actions
          and their current location in the form. In any moment, the user should
          be aware of what is happening and where they are in the navigation
          tree.
        </div>
      </div>
      <ProjectContent
        title="Color Accessibility Analysis"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "In the chart below you find a simulation of how people with different vision disabilities see the color #8947E9, the primary color for this app.",
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: "The WCAG grade the success of the color choices as Level A, AA, or AAA where a is the lowest level of conformance and AAA is the highest.",
          },
        ]}
      />
      <br />
      <div className="color-suggestion-container">
        <div className="color-suggestion-left">
          <img src={images.image7} style={{ width: "100%" }} />
          <img src={images.image9} style={{ width: "100%" }} />
        </div>
        <div className="color-suggestion-right">
          <img src={images.image8} style={{ width: "100%" }} />
        </div>
      </div>
      <ProjectContent
        title="Color Suggestion"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: "Increasing the contrast ratio of the colors will help users with visual disabilities not only to read better but also to distinguish buttons, links, controls, icons, etc. more easily. Suggested color #663399.",
          },
        ]}
      />
      <br />
      <div className="color-suggestion-container">
        <div className="color-suggestion-left">
          <img src={images.image10} style={{ width: "100%" }} />
          <img src={images.image12} style={{ width: "100%" }} />
        </div>
        <div className="color-suggestion-right">
          <img src={images.image11} style={{ width: "100%" }} />
        </div>
      </div>
      {/* todo make a global class for bottom of page */}
      <div style={{ minHeight: "40vh", visibility: "hidden" }}>hidden</div>
    </div>
  );
}

export default PocketVet;
