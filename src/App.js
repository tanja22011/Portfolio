import React from "react";
import './App.css'; 
import { Navbar, Nav } from 'react-bootstrap';
import PersonalInfo from "./components/PersonalInfo";
import EducationalBackground from "./components/EducationalBackground";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import { Link } from 'react-scroll';

function App() {
  return (
    <div>
      <div className="navbar-placeholder"></div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="personal-info" smooth={true} duration={500} offset={-70}>
              <Nav.Link href="#">About</Nav.Link>
            </Link>
            <Link to="educational-background" smooth={true} duration={500} offset={-70}>
              <Nav.Link href="#">Education</Nav.Link>
            </Link>
            <Link to="work-experience" smooth={true} duration={500} offset={-70}>
              <Nav.Link href="#">Experience</Nav.Link>
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <Nav.Link href="#">Projects</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className="content">
        <PersonalInfo id="personal-info" />
        <EducationalBackground id="educational-background" />
        <WorkExperience id="work-experience" />
        <Projects id ="projects" />
      </div>
    </div>
  );
}

export default App;