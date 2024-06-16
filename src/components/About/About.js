import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import sayaliImg from "../../Assets/Sayali.jpeg";
import Toolstack from "./Toolstack";
import { Element } from "react-scroll";
import Image from 'react-bootstrap/Image'
import EducationCard from "../Education/EducationCard";
import ExperienceCard from "../Experience/ExperienceCard";
import { Avatar } from "@mui/material";

function About() {
  return (
    <Element id="about_id">
        <Container fluid className="about-section">
      <Particle />
      <Container>
      <h1 style={{ color:"white", fontSize: "2.1em", paddingBottom: "20px" }}>
              Know who <strong className="purple">I am</strong>
            </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            xs={12}
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Avatar src={sayaliImg}  sx={{ width: "100%", height: "100%" }}/>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
           
            <Aboutcard />
       
          </Col>
          
         
        </Row>
        <h1 className="education">
           <strong className="purple">Education </strong>
        </h1>
        <EducationCard />

        <h1 className="education">
           <strong className="purple">Experience </strong>
        </h1>
        <ExperienceCard />
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>

    </Element>
      );
}

export default About;
