import React from "react";
import Firstpage from "./components/firstpage";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Firstpage />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="/Experience" element={<Experience />}></Route>
      <Route path="/Skills" element={<Skills />}></Route>
      <Route path="/Resume" element={<Resume/>}></Route>
    </Routes>
  );
}

export default App;
