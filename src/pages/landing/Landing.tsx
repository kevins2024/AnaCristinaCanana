import "./Landing.css";

function Landing() {
  return (
    <div className="landing-content" style={{ color: "white" }}>
      <div style={{ height: "40%" }}></div>
      <div className="landing-content-center-bar">
        <div className="landing-content-name">ANA CRISTINA CANANA</div>
        <div
          className="landing-content-profession"
          style={{ color: "#B9B9B9" }}
        >
          <div style={{ flex: 1, minWidth: "30%" }}>
            <div style={{ float: "right" }}>
              <span className="landing-content-profession-left-box">
                JOURNALIST
              </span>
              <span className="landing-content-profession-left-box">
                PROFESSOR
              </span>
            </div>
          </div>
          <div className="landing-content-profession-center-box">
            UX DESIGNER
          </div>
          <div style={{ flex: 1, minWidth: "30%" }}></div>
        </div>
      </div>
      <div style={{ height: "60%" }}></div>
    </div>
  );
}

export default Landing;
