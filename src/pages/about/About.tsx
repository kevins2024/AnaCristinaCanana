import PageBottom from "../../components/PageBottom";
import "./About.css";
import resume from "./assets/AnaCristina's Resume UX Designer.pdf";
// import image from "./assets/20230908_142451.jpg";
import image from "./assets/Group 15.png";

function About() {
  return (
    <div
      className="content-panel"
      style={{ flexDirection: "column", alignItems: "center" }}
    >
      <div className="about-spacing"></div>
      <div className="about-layout">
        <div className="about-left">
          <img className="about-me-image" src={image}></img>
        </div>
        <div className="about-middle"></div>
        <div className="about-right">
          <div>
            <p>
              {
                "My name is AnaCristina and I'm an entry-level UX Designer working on building up my UX portfolio. Previously, I have worked as a journalist, educator, and administrative assistant."
              }
            </p>
            <p>
              {" "}
              {
                "I came across UX when I kept getting frustrated with products I use daily and wondered what would be the best way to simplify the use of those products. I took a UX course from Google out of curiosity and ended up falling in love with it!"
              }
            </p>
            <p>
              {
                "I love design. I have always been creative in many ways; from cooking to sewing, drawing to organizing parties, crafts to gardening. Creativity has always been one of my strongest qualities."
              }
            </p>
            <p>
              {
                "I am the person that friends and colleagues call when they need a logo, a photo, or even a meme! Sharing happiness through design will always be my motivation to create full products or just one of the 'little things.'"
              }
            </p>
          </div>
          <div className="resume-link">
            {/* todo this might be a problem for accessibility */}
            <a href={resume} download="AnaCristina's Resume UX Designer.pdf">
              <button id="pdf-download" className="primary-button">
                Download Resume as PDF
              </button>
            </a>
          </div>
        </div>
      </div>
      <PageBottom heightRelativeToViewport={20} />
    </div>
  );
}

export default About;
