import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <>
      <Navbar/>
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Footer/>
      </>
  );
}

export default App;
