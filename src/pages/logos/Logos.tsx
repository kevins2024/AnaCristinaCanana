import "./Logos.css";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";

function Logos() {
  return (
    <div className="content-panel">
      <div className="logos-content">
        <div className="logos-container">
          <div className="flex-spacer logo-spacer"></div>
          <img className="logo-image" src={logo1} />
          <div className="flex-spacer logo-spacer"></div>
          <img className="logo-image" src={logo2} />
          <div className="flex-spacer logo-spacer"></div>
          <img className="logo-image" src={logo3} />
          <div className="flex-spacer logo-spacer"></div>
          <img className="logo-image" src={logo4} />
          <div className="flex-spacer logo-spacer"></div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
