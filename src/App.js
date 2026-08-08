import React, { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import AOS from 'aos'
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    // <AnimatePresence>
    //   <Routes>
    //     <Route path="/" element={ <Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>

    // </AnimatePresence>
    <div className="app">
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <ScrollToTop/>
    </div>

  );
}

export default App;
