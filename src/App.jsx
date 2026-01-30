import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import AllProjects from "./components/AllProjects";
import ContectForm from "./components/ContectForm";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="MainDiv" style={{ maxWidth: "912px", margin: "0 auto" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="*"
          element={
            <h1
              style={{
                fontSize: "1.5rem",
                letterSpacing: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                maxWidth: "912px",
              }}
            >
              404 Not Found
            </h1>
          }
        ></Route>
        <Route path="/projects" element={<AllProjects />}></Route>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/contactform" element={<ContectForm />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
