import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing/Landing";
import TopBar from "./shared/components/TopBar";

function App() {
  return (
    <div className="root-container root-background">
      <TopBar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
