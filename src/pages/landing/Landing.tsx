import "./Landing.css";

function Landing() {
  return (
    <div className="landing-content" style={{ color: "white" }}>
      <div style={{ height: "40%" }}></div>
      <div className="landing-content-center-bar">
        <div className="landing-content-name">ANA CRISTINA CANANA</div>
        <div className="profession">
          <div className="profession-left-container">
            <div className="profession-floater">
              <span className="profession-left-box">JOURNALIST</span>
              <span className="profession-left-box">PROFESSOR</span>
            </div>
          </div>
          <div className="profession-center-box">UX DESIGNER</div>
          <div style={{ flex: 1, minWidth: "30%" }}></div>
        </div>
        <div className="profession-mobile">
          <span className="profession-left-box">JOURNALIST</span>
          <span className="profession-left-box">PROFESSOR</span>
          <div className="profession-center-box">UX DESIGNER</div>
        </div>
      </div>
      <div style={{ height: "60%" }}></div>
    </div>
  );
}

export default Landing;
