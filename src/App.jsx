import { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Preloader from "./Components/Preloader";
import TopBar from "./Components/TopBar";
import Header from "./Components/Header";

// Lazy load components
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Services = lazy(() => import("./Components/Services"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));
const Footer = lazy(() => import("./Components/Footer"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const Resume = lazy(() => import("./Pages/Resume"));
const ProjectPage = lazy(() => import("./Pages/ProjectPage"));
const Project = lazy(() => import("./Pages/Project"));
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preloaderText, setPreloaderText] = useState("Welcome");
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname.startsWith("/projects/")) {
      console.log(pathname);
      const projectName = decodeURIComponent(pathname.split("/")[2]);
      document.title = `Projects - ${projectName}`;
    } else if (pathname === "/") {
      document.title = "Temesgen";
    } else {
      document.title = pathname
        .replace("/", "")
        .replace("*", "")
        .replace(/^\w/, (c) => c.toUpperCase());
    }
  }, [location.pathname]);
  return (
    <div>
      {isLoading ? (
        <Preloader text={preloaderText} isVisible={isLoading} />
      ) : (
        <>
          <TopBar />
          <Header />
          <ScrollToTop />
          <Suspense
            fallback={<Preloader text={preloaderText} isVisible={true} />}
          >
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
          </Suspense>
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
