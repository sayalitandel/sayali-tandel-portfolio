import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import jobt from '../../Assets/jobt.png';
import bme from '../../Assets/bme.png';
import fynt from '../../Assets/fynt.jpeg';
import opelsoft from '../../Assets/opelsoft.png';
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
                    July 2024- Current
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={opelsoft} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}}>Software Engineer</Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>Skills - Python, GraphQL, RAG, Langchain, Docker</li>
                                        </ul>                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="white" style={{fontWeight: 'bold'}}>
                    January 2024- March 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={bme} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}}>Web Developer</Card.Title>
                                    <Card.Text>
                                    <ul>
                                        <li>Skills - JavaScript, TypeScript, Bootstrap, Wordpress, Selenium</li>
                                        </ul>                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="white" style={{ fontWeight: 'bold' }}>
                    June 2022- November 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={jobt} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >Software Engineer</Card.Title>
                                    <Card.Text>
                                       <ul>
                                        <li>Skills - React, Next.js, Jest, GitLab, Postman, AWS Lambda</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="white" style={{ fontWeight: 'bold' }}>
                    September 2019- March 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card className="exp-card-view" >
                        <Row>
                            <Col>
                                <Card.Img src={fynt} className="exp-card-img"/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: 'bold'}} >Associate Software Engineer</Card.Title>
                                    <ul>
                                        <li>Skills - PHP- Laravel, MySQL, RESTful APIs, OAuth, JWT
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