import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing/Landing";
import TopBar from "./TopBar";
import Photography from "./pages/photography/Photography";
import Logos from "./pages/logos/Logos";
import Projects from "./pages/projects/Projects";
import Taqueria from "./pages/projects/Taqueria/Taqueria";
import Meet from "./pages/projects/Meet/Meet";
import Orb from "./pages/projects/Orb/Orb";
import Characters from "./pages/characters/Characters";
import About from "./pages/about/About";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="root-container">
      <TopBar />
      <div
        style={{ height: "100%" }}
        id={location.pathname != "/" ? "content-wrapper" : ""}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/taqueria" element={<Taqueria />} />
          <Route path="/projects/meet" element={<Meet />} />
          <Route path="/projects/myorb" element={<Orb />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
