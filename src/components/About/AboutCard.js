import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Shraddha Iyer, </span>
            a Software Developer based out of New York City, NY. 
         
            I am curently attending<span className="purple"> New York University</span>  as a Computer Science Grad student.  
            <br/>
            I am passionate about building highly scalable and performant applications that solve real world problems.
            Over the last few years, I have built strong <span className="purple">analytical skills</span> and a passion for <span className="purple">problem-solving.</span>
            If you’d like to learn more about me, please connect with me on <a link href ="https://www.linkedin.com/in/shraddha-iyer/" className="purple">Linkedin</a>. You can also follow me on social media at the handles listed below.
            <br/>
            </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
