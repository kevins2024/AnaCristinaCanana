import "./Logos.css";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";

function Logos() {
  return (
    <div className="content-panel logos-content">
      <img className="logo-image" src={logo1} />
      <img className="logo-image" src={logo2} />
      <img className="logo-image" src={logo3} />
      <img className="logo-image" src={logo4} />
    </div>
  );
}

export default Logos;
