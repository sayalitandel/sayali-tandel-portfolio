import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jupyter from "../../Assets/Projects/jupyter.png";
import audio from "../../Assets/Projects/audio.png";
import dailyyou from "../../Assets/Projects/dailyyou.png";
import medium from "../../Assets/Projects/medium.png";
import flaunt from "../../Assets/Projects/flaunt.png";
import flight from "../../Assets/Projects/flight.png";
import { Element } from "react-scroll";
function Projects() {
  return (
    <Element id="project_id">
      <Container fluid className="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flaunt}
              isBlog={false}
              title="Flaunt Website"
              description="Development of a responsive full-stack e-commerce health & wellness website in an Agile environment."
              ghLink="https://github.com/sayalitandel/Flaunt"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medium}
              isBlog={false}
              title="Medium.com Clone"
              description="Creation of a Medium.com-inspired blogging platform with user authentication, post management, and commenting."
              ghLink="https://github.com/sayalitandel/Medium-Clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dailyyou}
              isBlog={false}
              title="Daily You Mobile Application"
              description="Development of a cross-platform mobile to-do list app with real-time data synchronization."
              ghLink="https://github.com/sayalitandel/Daily-You"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jupyter}
              isBlog={false}
              title="Open-Source Contribution- JupyterLab"
              description="Open-Source Contribution to the JupyterLab to resolve a bug to prevent downgrades."
              ghLink="https://github.com/sayalitandel/jupyterlab"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audio}
              isBlog={false}
              title="Audio Data Analysis"
              description="Transformation of audio data to text for high-precision sentiment and gender identification."
              ghLink="https://github.com/sayalitandel/Audio-Analysis"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Delay Prediction"
              description="Implementation of flight delay prediction on over 12 million data points."
              ghLink="https://github.com/sayalitandel/Flight-Delay-Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>

    </Element>
      );
}

export default Projects;
