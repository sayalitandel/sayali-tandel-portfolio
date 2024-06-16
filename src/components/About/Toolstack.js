import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGit, 
  SiDocker,
  SiAmazonaws
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux color="white"   />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="white" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws color="white" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit color="white" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker color="white" />
      </Col>
    </Row>
  );
}

export default Toolstack;
