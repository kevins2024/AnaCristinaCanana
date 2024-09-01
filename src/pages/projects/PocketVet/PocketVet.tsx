import ComponentWrapper from "../../../components/ComponentWrapper.tsx";
import Heading from "../../../components/Heading.tsx";
import ProjectContent, {
  ProjectContentType,
} from "../../../components/ProjectContent";
import images from "./assets/index.ts";
import arrowLeft from "../Taqueria/assets/arrow_left_alt_FILL0_wght400_GRAD0_opsz24.svg";
import arrowRight from "../Taqueria/assets/arrow_right_alt_FILL0_wght400_GRAD0_opsz24.svg";
import success from "./assets/check-circle-svgrepo-com.svg";
import warning from "./assets/warning-svgrepo-com.svg";
import info from "./assets/info-svgrepo-com.svg";
import error from "./assets/warning-circle-svgrepo-com.svg";
import "./PocketVet.css";
import ProjectFacts from "../../../components/ProjectFacts.tsx";
import SpacerVertical from "../../../components/SpacerVertical.tsx";
import PageBottom from "../../../components/PageBottom.tsx";

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
      <SpacerVertical />
      <div className="vet-summary-section">
        <SpacerVertical />
        <ProjectFacts
          titles={["Project Duration:", "Responsibilities:", "Role:", "Tools:"]}
          values={[
            "February to May 2024",
            "Review the application for accessibility only",
            "UX Consultant",
            "Figma and Web Content Accessibility Guide",
          ]}
        />
      </div>
      <SpacerVertical />
      <ProjectContent
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: `Pocket Vet is an application designed to aid
              veterinarians in requesting consultations from specialist
              veterinarians when encountering complex cases.`,
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
      <SpacerVertical />
      <ProjectContent
        title="Buttons Purposes"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: `Ensure that buttons have a clear purpose and accompanying 
            text to assist users in making decisions. Action buttons consisting 
            only of images without text can be challenging for screen readers 
            and color-blind users to detect. Including descriptive text 
            alongside images not only enhances accessibility but also promotes 
            smoother navigation for all users.`,
          },
        ]}
      />
      <div className="pocket-vet-button-suggestion-desktop-wrapper">
        <div className="vet-button-suggestion-header">
          <b>Before</b>
          <b>Suggested</b>
        </div>
        <div className="vet-button-suggestion-container">
          <div className="vet-button-suggestion-image-wrapper">
            <img src={images.image1} />
          </div>
          <div className="vet-button-suggestion-arrow-container">
            {/* todo replace the arrow with one with rounded edges, soften color a little, and make it app wide */}
            <img src={arrowLeft} />
          </div>
          <div className="vet-button-suggestion-textbox">
            <span className="bold">Note:</span> <SpacerVertical />
            This button should complement the body of the dialog.
          </div>
          <div className="vet-button-suggestion-image-wrapper">
            <img src={images.image2} />
          </div>
        </div>
      </div>
      <div className="pocket-vet-button-suggestion-mobile-wrapper">
        <b>Before</b>
        <img src={images.image1} />
        <p>This button should complement the body of the dialog.</p>
        <b>Suggested</b>
        <img src={images.image2} />
      </div>

      <ProjectContent
        title="Hovering"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: `Hover states are crucial for identifying buttons, links, 
            and controls. They assist not only users with low vision or 
            colorblindness but also general users in quickly identifying 
            action items and avoiding confusion.`,
          },
        ]}
      />
      <SpacerVertical />
      <SpacerVertical />
      <div className="vet-hovering-container">
        <div className="vet-hovering-image-wrapper">
          <img src={images.image3} />
        </div>
        <div className="vet-hovering-arrow-container">
          <img src={arrowLeft} />
        </div>
        <div className="vet-hovering-textbox">
          <span className="bold">Suggestion</span> <SpacerVertical />
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
            data: `To enhance accessibility and clarity for users, consider 
            incorporating symbols like an exclamation mark or asterisk 
            alongside red text to indicate errors. Here, I recommend adding a 
            standardized icon for each case. This not only aids users 
            with color vision deficiencies but also ensures screen reader 
            compatibility. Additionally, ensure that error messages are accessible 
            to keyboard-only users by including them in the keyboard tab order. 
            This way, screen readers can detect the error.`,
          },
        ]}
      />
      <div className="vet-status-container">
        <img src={images.image4} className="vet-status-image" />
        <div className="status-icon-container">
          <div className="status-icon-item bold">Suggestion</div>
          <div className="status-icon-item status-icon-wrapper success">
            <img src={success} className="pocketvet-icons" />
            <div>Invoice created successfully.</div>
          </div>
          <div className="status-icon-item status-icon-wrapper warning">
            <img src={warning} className="pocketvet-icons" />
            <div>Hold on a second...</div>
          </div>
          <div className="status-icon-item status-icon-wrapper info">
            <img src={info} className="pocketvet-icons" />
            <div>Did you know you can do this?</div>
          </div>
          <div className="status-icon-item status-icon-wrapper error">
            <img src={error} className="pocketvet-icons" />
            <div>It looks like something went wrong.</div>
          </div>
        </div>
      </div>
      <SpacerVertical />
      <ProjectContent
        title="Tab Navigation"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: `Ensuring that all functionalities can be accessed from a 
            keyboard is crucial for users who rely on keyboard navigation due 
            to motor disabilities or other limitations. By enabling keyboard 
            access to all functionalities, designers and developers ensure 
            that their products are inclusive and usable for a wider range 
            of users, promoting equal access and participation for all.`,
          },
        ]}
      />
      <SpacerVertical />
      {/* todo change all fontweight: bold to h3 or smaller
      todo change all br tags to divs with spacing */}
      <div className="tab-navigation-container-mobile">
        <img className="tab-navigation-image" src={images.image6} />
        <b>Suggestions:</b>
        <p>
          The form is very easy to navigate using the touch screen but when it
          comes to navigating only with the keyboard, it presents an
          accessibility issue for users. For example, there is no way to attach
          files using only the keyboard.
        </p>
        <p>
          The save button contrast, when selected by keyboard navigation, is
          very low compared with the contrast of the rest of the form.
          <SpacerVertical />
          This could potentially lead to user uncertainty about their actions
          and their current location in the form. In any moment, the user should
          be aware of what is happening and where they are in the navigation
          tree.
        </p>
      </div>
      <div className="tab-navigation-container-desktop">
        <div className="tab-navigation-wrapper">
          <span className="bold">Suggestion</span>
          <SpacerVertical />
          The form is very easy to navigate using the touch screen but when it
          comes to navigating only with the keyboard, it presents an
          accessibility issue for users. For example, there is no way to attach
          files using only the keyboard.
        </div>
        {/* todo move arrow asset files */}
        <img className="tab-navigation-arrow-right" src={arrowRight} />
        <img
          className="tab-navigation-image"
          src={images.image6}
          style={{ width: "34%", height: "auto", objectFit: "contain" }}
        />
        <img src={arrowLeft} className="tab-navigation-arrow-left" />
        <div className="tab-navigation-textbox">
          <span className="bold">Suggestion</span>
          <SpacerVertical />
          The save button contrast, when selected by keyboard navigation, is
          very low compared with the contrast of the rest of the form.
          <SpacerVertical />
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
            data: `In the chart below you find a simulation of how people with
             different vision disabilities see the color #8947E9, the primary 
             color for this app.`,
          },
          {
            type: ProjectContentType.PARAGRAPH,
            data: `The WCAG grade the success of the color choices as Level A, 
            AA, or AAA where a is the lowest level of conformance and AAA is 
            the highest.`,
          },
        ]}
      />
      <SpacerVertical />
      <div className="color-suggestion-container">
        <div className="color-suggestion-left">
          <img src={images.image7} className="color-suggestion-image" />
          <img src={images.image9} className="color-suggestion-image" />
        </div>
        <div className="color-suggestion-right">
          <img src={images.image8} className="color-suggestion-image" />
        </div>
      </div>
      <ProjectContent
        title="Color Suggestion"
        content={[
          {
            type: ProjectContentType.PARAGRAPH,
            data: `Increasing the contrast ratio of the colors will help users 
            with visual disabilities not only to read better but also to distinguish 
            buttons, links, controls, icons, etc. more easily. Suggested color 
            #663399.`,
          },
        ]}
      />
      <SpacerVertical />
      <div className="color-suggestion-container">
        <div className="color-suggestion-left">
          <img src={images.image10} className="color-suggestion-image" />
          <img src={images.image12} className="color-suggestion-image" />
        </div>
        <div className="color-suggestion-right">
          <img src={images.image11} className="color-suggestion-image" />
        </div>
      </div>
      <PageBottom
        heightRelativeToViewport={30}
        buttonText="Back to Projects"
        buttonUrl="/projects"
      />
    </div>
  );
}

export default PocketVet;
