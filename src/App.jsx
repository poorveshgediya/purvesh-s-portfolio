import React from "react";
import Firstpage from "./components/firstpage";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Photo1 from "./photo/calculator.png";
import Photo2 from "./photo/coffee.png"
import Photo3 from "./photo/nft.png";

function App() {

  const projectdata = [
    {
      title:"React-Calculator",
      image: Photo1,
      discripction:"Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, and division. Focused on clean UI design using CSS and implemented component-based architecture in React.",
      techstcak:["HTML-CSS","React","JavaScript"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://calculator-purvesh.netlify.app/"
    },
    {
      title:"Web-based coffee billing system",
      image:Photo2,
      discripction:"It’s web based coffee billing system where the store keeper will manage the customer details and invoices and the customer is regular or not and also manage the product menu all the product and it’s up to date means from sing-up to pay bill on web.",
      techstcak:["HTML-CSS","JavaScript","PHP","MySql"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://calculator-purvesh.netlify.app/"
    },
    {
      title:"NFT-Marketplace",
      image:Photo3,
      discripction:"Built a basic yet functional calculator using React that performs arithmetic operations like addition, subtraction, multiplication, and division. Focused on clean UI design using CSS and implemented component-based architecture in React.",
      techstcak:["HTML-CSS","React","TypeScript","Aptos Blockchain","Petra Wallet"],
      github:"https://github.com/poorveshgediya/Calculator",
      live:"https://ownnft-marketplace.netlify.app/"
    },  
  ]

  return (
    <Routes>
      <Route path="/" element={<Firstpage />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Projects" element={<Projects Projects={projectdata}/>}></Route>
      <Route path="/Experience" element={<Experience />}></Route>
      <Route path="/Skills" element={<Skills />}></Route>
      <Route path="/Resume" element={<Resume/>}></Route>
    </Routes>
  );
}

export default App;
