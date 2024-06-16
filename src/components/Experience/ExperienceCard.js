import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import xoriant from '../../Assets/xoriant.png';
import amazon from '../../Assets/amazon.png';
import tacto from '../../Assets/tacto.png';
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="white" style={{fontWeight: 'bold'}}>
                    
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={amazon} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}}>Software Engineer Intern</Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>Skills - Java, ReactJs, Glue, Cloud Formation, Step Function, Lambda Functions, S3, DynamoDB</li>
                                        </ul>                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
               
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={xoriant} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >Associate Software Engineer</Card.Title>
                                    <Card.Text>
                                       <ul>
                                        <li>Skills - Java, C#, AngularJs, Spring Boot, Git, SQL</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
           
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={tacto} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >Junior Software Engineer</Card.Title>
                                    <ul>
                                        <li>Skills - Python, ReactJS, Docker, Git, MongoDB
                                    </li>
                                        </ul>
                                    
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                </TimelineContent>
            </TimelineItem>
        </Timeline>
        
    );
}