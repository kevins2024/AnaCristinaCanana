import "./TopBar.css";
import acLogo from "../../assets/logo-ac-black.png";

function TopBar() {
  return (
    <div className="top-bar">
      <img
        src={acLogo}
        style={{ width: "42px", height: "50px", marginLeft: "20px" }}
      />
      <div className="top-bar-button-box">
        {/* change these to links */}
        <div className="top-bar-button">PROJECTS</div>
        <div className="top-bar-button">LOGOS</div>
        <div className="top-bar-button">CHARACTERS</div>
        <div className="top-bar-button">ABOUT</div>
        <div className="top-bar-button">PHOTOGRAPHY</div>
      </div>
    </div>
  );
}

export default TopBar;
