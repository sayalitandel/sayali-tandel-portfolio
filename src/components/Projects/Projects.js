import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
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
              imgPath={chatify}
              isBlog={false}
              title="Concurreny control and Recovery System"
              description="A distributed database, complete with multiversion concurrency control, deadlock detection, replication, and
              failure recovery. "
              ghLink="https://github.com/shradhaiyer/Concurreny-control-and-recovery"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Skin Disease Detection System"
              description="An android application that can be accessed anytime and anywhere for instant diagnosis and indicating the probability of skin abnormalities like rosacea, pigmentation, and acne."
              ghLink="https://github.com/shradhaiyer/CNN--Skin-disease-Classification"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Application"
              description="An end-to-end ecommerce site developed with MERN Stack"
              ghLink="https://github.com/shradhaiyer/E-commerce-application/edit/main/Readme.md"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Predicting top performing stocks"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Covid-19 Cases Tracker"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>

    </Element>
      );
}

export default Projects;
