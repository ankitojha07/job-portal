import "./index.css";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <div className=" text-white">
      {/* Left Section */}
      <div className="left-0 fixed top-0 w-2/12"></div>
      {/* Right Section */}
      <div className="top-0">
        <Jobs />
      </div>
    </div>
  );
}

export default App;
