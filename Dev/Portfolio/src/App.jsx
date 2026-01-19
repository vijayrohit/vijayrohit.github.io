import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ExperienceDetail from "./components/ExperienceDetail";
import PageTransition from "./components/PageTransition";
import TechBackground from "./components/TechBackground";

function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </PageTransition>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/experience/:id"
          element={
            <PageTransition>
              <ExperienceDetail />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

import ScrollToTop from "./components/ScrollToTop";

// ... (imports remain)

function ConditionalNavbar() {
  const location = useLocation();
  // Hide Navbar on Experience Detail pages
  if (location.pathname.startsWith("/experience/")) {
    return null;
  }
  return <Navbar />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <TechBackground />
        <div className="noise-overlay"></div>
        <ConditionalNavbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
