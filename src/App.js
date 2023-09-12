import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./helper/particlesConfig";
import Home from './pages/home';
import Skills from './pages/skills';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Contact from "./pages/contact";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const showParticles = location.pathname === "/";

  return (
    <div className="App">
      {showParticles && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      )}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      <div className="App__main-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;