import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing/Landing";
import TopBar from "./TopBar";
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
        <Route path="/projects/taqueria" element={<Logos />} />
        <Route path="/projects/meet" element={<Logos />} />
        <Route path="/projects/myorb" element={<Logos />} />
      </Routes>
    </div>
  );
}

export default App;
