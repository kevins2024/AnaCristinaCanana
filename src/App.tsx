import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing/Landing";
import TopBar from "./shared/components/TopBar";
import Photography from "./pages/photography/Photography";

function App() {
  return (
    <div className="root-container root-background">
      <TopBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </div>
  );
}

export default App;
