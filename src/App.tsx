import "./App.css";
import Landing from "./pages/landing/Landing";
import TopBar from "./shared/components/TopBar";

function App() {
  return (
    <div className="root-container">
      <TopBar />
      <Landing />
    </div>
  );
}

export default App;
