import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
  DiJava, 
  DiScala,
  DiSpark,

} from "react-icons/di";
import {
  SiNextdotjs, 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        < DiJava color="white" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus color="white" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython color="white"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="white"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs color="white"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact color="white"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql color="white"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs color="white"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark color="white"/>
      </Col>
      
   
    
 
      
    </Row>
  );
}

export default Techstack;
