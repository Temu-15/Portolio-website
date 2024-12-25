// import { useState } from "react";

// import "./App.css";
// import About from "./Components/About";
// import Header from "./Components/Header";
// import TopBar from "./Components/TopBar";
// import Hero from "./Components/Hero";
// import AboutPage from "./Pages/AboutPage";
// import Services from "./Components/Services";
// import ProjectPage from "./Pages/ProjectPage";
// import Projects from "./Components/Projects";
// import Project from "./Pages/Project";
// import Footer from "./Components/Footer";
// import Contact from "./Components/Contact";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Resume from "./Pages/Resume";
// import ScrollToTop from "./ScrollToTop";

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <TopBar />
//       <Header />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Services />
//               <Projects />
//               <Contact />
//               <Footer />
//             </>
//           }
//         />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="showresume" element={<Resume />} />
//         <Route path="projects" element={<ProjectPage />} />
//         <Route path="projects/:project" element={<Project />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

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
import Preloader from "./Components/Preloader"; // Import Preloader

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderText, setPreloaderText] = useState("");

  useEffect(() => {
    const handlePreloader = () => {
      // Trigger loading on route change
      setIsLoading(true);
      const currentPath = location.pathname.replace("/", "") || "Home";
      setPreloaderText(
        currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
      );

      // Delay content loading
      const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust timing here
      return () => clearTimeout(timer);
    };

    handlePreloader();
  }, [location.pathname]);

  return (
    <div>
      {isLoading && <Preloader text={preloaderText} isVisible={isLoading} />}
      {!isLoading && (
        <>
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
