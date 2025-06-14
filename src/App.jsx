import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Photo from "./photo/calculator.png";

function App() {

  const projectdata = [
    {
      title:"React-Calculator",
      image: Photo,
      discripction:"Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, and division. Focused on clean UI design using CSS and implemented component-based architecture in React.",
      techstcak:["React","JavaScript","CSS"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://calculator-purvesh.netlify.app/"
    },
    {
      title:"Portfolio",
      discripction:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      techstcak:["React","JavaScript","CSS"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://calculator-purvesh.netlify.app/"
    },
    {
      title:"Web-based billing system",
      discripction:"Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, and division. Focused on clean UI design using CSS and implemented component-based architecture in React.Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, ",
      techstcak:["React","JavaScript","CSS"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://calculator-purvesh.netlify.app/"
    },
    {
      title:"NFT-Marketplace",
      discripction:"Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, and division. Focused on clean UI design using CSS and implemented component-based architecture in React.",
      techstcak:["React","JavaScript","CSS"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://calculator-purvesh.netlify.app/"
    },
    
  ]

  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Projects" element={<Projects Projects={projectdata}/>}></Route>
      <Route path="/Skills" element={<Skills />}></Route>
    </Routes>
  );
}

export default App;
