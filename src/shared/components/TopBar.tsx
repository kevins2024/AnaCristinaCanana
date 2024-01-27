import "./TopBar.css";
import acLogo from "../../assets/logo-ac-black.png";

function TopBar() {
  return (
    <div className="top-bar top-bar-background">
      <img
        src={acLogo}
        style={{ width: "42px", height: "50px", paddingLeft: "20px" }}
      />
      <div className="top-bar-button-box">
        <div style={{ color: "white" }}>this is the right stuff</div>
      </div>
    </div>
  );
}

export default TopBar;
