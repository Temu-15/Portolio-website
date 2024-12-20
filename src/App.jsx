import { useState } from "react";

import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import Hero from "./Components/Hero";
import AboutPage from "./Pages/AboutPage";
import Services from "./Components/Services";
import ProjectPage from "./Pages/ProjectPage";
import Projects from "./Components/Projects";
import Project from "./Pages/Project";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
      <TopBar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="about" element={<AboutPage />} />
        <Route path="showresume" element={<Resume />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="projects/:project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
