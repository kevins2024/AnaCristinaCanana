import "./TopBar.css";
import acLogo from "../../assets/logo-ac-black.png";
import { NavLink, useNavigate } from "react-router-dom";

function TopBar() {
  const buttons: navButtonData[] = [
    {
      display: "PROJECTS",
      path: "/projects",
    },
    {
      display: "LOGOS",
      path: "/logos",
    },
    {
      display: "CHARACTERS",
      path: "/characters",
    },
    {
      display: "ABOUT",
      path: "/about",
    },
    {
      display: "PHOTOGRAPHY",
      path: "/photography",
    },
  ];
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div className="top-bar">
      <img
        onClick={goHome}
        src={acLogo}
        style={{ width: "42px", height: "50px", marginLeft: "20px" }}
      />
      <div className="top-bar-button-box">
        {buttons.map((button) => (
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "top-bar-button top-bar-button-active"
                : "top-bar-button"
            }
            key={button.display}
            to={button.path}
          >
            {button.display}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default TopBar;

type navButtonData = {
  display: string;
  path: string;
};
