import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Sayali Tandel, </span>
            a Software Engineer based in New York City, NY. 
         
            Currently, I am seeking<span className="purple"> new opportunities</span>  as a Computer Science Grad student.  
            <br/>
            I am passionate about building highly scalable, performant applications that tackle real-world challenges.
            Over the years, I have honed strong <span className="purple">analytical skills</span> developed a deep-seated passion for <span className="purple">problem-solving. </span>
            To learn more about my professional journey, feel free to connect with me on <a link href ="https://www.linkedin.com/in/sayalitandel/" className="purple">Linkedin</a> or follow me on social media using the handles below.
            <br/>
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
