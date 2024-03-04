import "./About.css";
import resume from "./assets/AnaCristina's Resume UX Designer.pdf";

function About() {
  return (
    <div className="about-layout">
      <div className="about-left">
        <div className="about-container">
          <div className="about-hello">Hello!</div>
          <div className="about-hola">¡Hola!</div>
          <div className="about-ola">Olá</div>
        </div>
      </div>
      <div className="about-right">
        <p>
          {
            "My name is AnaCristina and I'm an entry-level UX Designer working on building up my UX portfolio. Previously, I have worked as a jouralist, educator, and administrative assistant."
          }
        </p>
        <p>
          {" "}
          {
            "I cam across UX when I kept getting frustrated with products I use daily and wondering what would be the best way to simplify the use of those products. I too a UX course from Google out of curiosity and ended up falling in love with it!"
          }
        </p>
        <p>
          {
            "I love design. I have always been creative in many ways; from cooking to sewing, drawing to organizing parties, from crafts to gardening. Creativity has always been one of my strongest qualities."
          }
        </p>
        <p>
          {
            "I am the person that people call when they need a logo, a photo, or even a meme! Sharing happiness through design will always be my motivation to create full products or just one of the 'little things.'"
          }
        </p>
      </div>
      <a className="resume-link" href={resume}>
        Download Resume as PDF
      </a>
    </div>
  );
}

export default About;
