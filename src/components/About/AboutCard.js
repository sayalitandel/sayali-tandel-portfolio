import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Sayali Tandel</span> — a Software
            Engineer based in New York City.
            <br />I enjoy building <span className="purple">
              scalable
            </span>, <span className="purple">high-performance</span>{" "}
            applications that solve real-world problems. My work spans frontend,
            backend, and cloud systems, with a strong focus on{" "}
            <span className="purple">clean architecture</span>,{" "}
            <span className="purple">performance</span>, and{" "}
            <span className="purple">reliability</span>.
            <br />I bring a{" "}
            <span className="purple">problem-solving mindset</span> shaped by
            both industry experience and a strong foundation in computer
            science. I’m always curious about learning new technologies and
            applying them to practical, impactful use cases.
            <br />
            Feel free to explore my work here, or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/sayalitandel/"
              className="purple"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/sayalitandel"
              className="purple"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            below.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
