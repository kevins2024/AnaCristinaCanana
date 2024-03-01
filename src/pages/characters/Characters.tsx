import image1 from "./assets/All characters-2.jpg";
import image2 from "./assets/Character's section 2.png";
import image3 from "./assets/Character's section 3.png";
import image4 from "./assets/Character's section 4.png";

function Characters() {
  return (
    <div className="content-panel project-content-layout ">
      <img src={image1} style={{ width: "80%" }} />
      <br />
      <div style={{ textAlign: "center" }} className="project-content-parent">
        {
          "When I worked as a preschool teacher I would find myself enjoying children's books more than my students. I love the graphics, the silly/funny stories and all the creativity involved in them. When I got an iPad I started to play with Procreate and Illustrator. That's how I gave life to all my 'kids'! My goal one day is to publish and illustrate my very own children's book. Meanwhile, I have been designing paper collections for use in crafting in collaboration with My Enchanted Colors in Mexico."
        }
        <div style={{ textAlign: "left" }} className="project-content-title">
          Paper Collection
        </div>
        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30% 30% 30%",
            gap: "5%",
          }}
        >
          <img style={{ maxWidth: "100%" }} src={image2} />
          <img style={{ maxWidth: "100%" }} src={image3} />
          <img style={{ maxWidth: "100%" }} src={image4} />
        </div>
      </div>
      <br />
    </div>
  );
}
export default Characters;
