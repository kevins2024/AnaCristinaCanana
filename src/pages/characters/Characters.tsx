import SpacerVertical from "../../components/SpacerVertical";
import "./Characters.css";
import image1 from "./assets/All characters-2resized.jpg";
import image1mobile from "./assets/All characters-2mobile.jpg";
import image2 from "./assets/Character's section 2.png";
import image3 from "./assets/Character's section 3.png";
import image4 from "./assets/Character's section 4.png";
import PageBottom from "../../components/PageBottom";

function Characters() {
  return (
    <div className="content-panel characters-content-layout">
      <img src={image1} className="characters-banner-image" />
      <img src={image1mobile} className="characters-banner-image-mobile" />
      <SpacerVertical />
      <div style={{ textAlign: "center" }} className="project-content-parent">
        {
          "When I worked as a preschool teacher I would find myself enjoying children's books more than my students. I love the graphics, the silly/funny stories and all the creativity involved in them. When I got an iPad I started to play with Procreate and Illustrator. That's how I gave life to all my 'kids'! My goal one day is to publish and illustrate my very own children's book. Meanwhile, I have been designing paper collections for use in crafting in collaboration with My Enchanted Colors in Mexico."
        }
        <div style={{ height: "4vh" }}></div>
        <div style={{ textAlign: "left" }} className="project-content-title">
          Paper Collection
        </div>
        <SpacerVertical />
        <div className="paper-collection-container">
          <div>
            <img style={{ maxWidth: "80%" }} src={image2} />
          </div>
          <div className="flex-spacer paper-collection-spacer"></div>
          <div>
            <img style={{ maxWidth: "80%" }} src={image3} />
          </div>
          <div className="flex-spacer paper-collection-spacer"></div>
          <div>
            <img style={{ maxWidth: "80%" }} src={image4} />
          </div>
        </div>
      </div>
      <PageBottom heightRelativeToViewport={20} />
    </div>
  );
}
export default Characters;
