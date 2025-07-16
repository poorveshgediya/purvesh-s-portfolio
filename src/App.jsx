import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Firstpage from "./components/Firstpage";
import Layout from "./components/Layout";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Firstpage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Experience" element={<Experience />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
        </Route>
      </Routes>
  );
}

export default App;
