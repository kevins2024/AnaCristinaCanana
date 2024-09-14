import "./TopBar.css";
import acLogoSvg from "./assets/logo-ac.svg";
import closeIcon from "./assets/close-md-svgrepo-com.svg";
import { NavLink, useNavigate } from "react-router-dom";
// import hamburgerMenu from "./assets/menu_FILL0_wght400_GRAD0_opsz24.svg";
import hamburgerMenu from "./assets/hamburger-menu-svgrepo-com.svg";
import { useState } from "react";

function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  function toggleBurgerMenu(event: React.MouseEvent) {
    if (
      isMenuOpen &&
      !(event.target as HTMLElement).classList.contains("can-close")
    )
      return;
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className="top-bar">
        <img
          onClick={goHome}
          src={acLogoSvg}
          style={{ height: "55px", marginLeft: "20px" }}
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
        <img
          onClick={toggleBurgerMenu}
          className="top-bar-hamburger-icon"
          src={hamburgerMenu}
        />
      </div>
      <div
        onClick={toggleBurgerMenu}
        className={`can-close top-bar-hamburger-menu-overlay${
          !isMenuOpen ? " overlay-hidden" : ""
        }`}
      >
        {" "}
      </div>
      <div
        className={`top-bar-hamburger-menu${
          isMenuOpen ? " top-bar-hamburger-menu-open" : ""
        }`}
      >
        <button
          className="can-close top-bar-hamburger-menu-close-button"
          onClick={toggleBurgerMenu}
        >
          <img
            src={closeIcon}
            style={{ width: "18pt", pointerEvents: "none" }}
          />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "17px",
          }}
        >
          {buttons.map((button) => (
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "top-bar-hamburger-button top-bar-hamburger-button-active can-close"
                  : "top-bar-hamburger-button can-close"
              }
              key={button.display + "-burger"}
              to={button.path}
              onClick={toggleBurgerMenu}
            >
              {button.display}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopBar;

type navButtonData = {
  display: string;
  path: string;
};
