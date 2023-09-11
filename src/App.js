// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import './index.css';
import "./App.css";
import Home from './pages/home';
import Experience from './pages/experience';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="app">
      {/* particles */}

      {/* navbar */}
      <Navbar />
      {/* main page content */}
     <div className="App_main-page-content">
     <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     </div>


    </div>
  );
}

export default App;
