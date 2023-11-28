import React from "react";
import { Outlet,
  Routes,
  Route, } from 'react-router-dom';
import './index.css';
import Navbar from "./Components/Navbar/index";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Education from "./Components/Education";
import Foot from "./Components/Foot";


export default function App () { 
  // const scrollPosition = useScrollPosition();

  // console.log(scrollPosition);

  return (
    <div>
      <Navbar />
      <About/>
      <Skills/>
      <Projects/>
      <WorkExperience/>
      <Education/>
      <Contact/>

      <Routes>
      <Route path="/" >
        <Route path="about" />
        <Route path="contact" />
        <Route path="education"/>
        <Route path="workexperience" />
        <Route path="projects&activities" />
        <Route path="skills"/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
    <Foot/>
      <Outlet />
    </div>
  );
}

