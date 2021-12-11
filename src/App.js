import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Employments from "./components/Employments";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
import Blogs from "./components/Blogs";
import Books from "./components/Books";
import DegreeandCerts from "./components/DegreeandCerts";
import RCD from "./components/projects/RCD";
import VMS from "./components/projects/VMS";
// import CAS from "./components/projects/CAS";
import CDC from "./components/projects/CDC";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Employments />}></Route>
            <Route path="/proj" element={<Projects />}></Route>
            <Route path="/skill" element={<Skillset />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/deg" element={<DegreeandCerts />}></Route>
            <Route path="/rcd" element={<RCD />}></Route>
            <Route path="/vms" element={<VMS />}></Route>
            <Route path="/cdc" element={<CDC />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
