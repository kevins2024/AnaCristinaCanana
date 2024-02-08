import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing/Landing";
import TopBar from "./components/TopBar";
import Photography from "./pages/photography/Photography";
import Logos from "./pages/logos/Logos";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="root-container root-background">
      <TopBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
