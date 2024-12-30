import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import Resume from "./Pages/Resume";
import ScrollToTop from "./ScrollToTop";
import Preloader from "./Components/Preloader";

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderText, setPreloaderText] = useState("Welcome");

  useEffect(() => {
    const handlePreloader = () => {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    };
    window.onload = handlePreloader();
  }, []);

  return (
    <div>
      {isLoading && <Preloader text={preloaderText} isVisible={isLoading} />}
      {!isLoading && (
        <>
          <TopBar />
          <Header />g
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
        </>
      )}
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
