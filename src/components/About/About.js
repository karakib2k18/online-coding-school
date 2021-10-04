import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./About.css"
const About = () => {
    return (
        <>
            <div className="container mt-4">
                <div>
                    <h3 className="orange">Who we are?</h3>
                    <h2>We are providing the best quality online coding courses. Our all instructors are high expert on this.</h2>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>12,600+</h3> </Card.Title>
                                    <Card.Text >
                                        <p> Students Enrolled</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>40+</h3> </Card.Title>
                                    <Card.Text >
                                        <p>Registered Instructors</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>100%</h3> </Card.Title>
                                    <Card.Text >
                                        <p>Success Rate</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="mt-5">
                    <h3 className="orange">Best learning platform </h3>
                    <h1>Why we are the best</h1>
                    <Row xs={1} md={3} className="g-4 mt-1">
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>High Quality Courses </h3> </Card.Title>
                                    <Card.Text >
                                        <p>We provide High quality education</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>Expert Instructors </h3> </Card.Title>
                                    <Card.Text >
                                        <p>We have a lot of expert Instructors</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>Life Time Access </h3> </Card.Title>
                                    <Card.Text >
                                        <p>We will provide all video for lifetime</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h1 className="orange mt-5">See Our All Facilities</h1>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        <Col className="">
                            <Card className="shadow p-3 bg-white rounded h-100 text-start card-header1">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>Work with us</h3> </Card.Title>
                                    <Card.Text >
                                        <p> we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-warning mx-auto"><span className="ms-2">Read More</span></button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start card-header2">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>See our research</h3> </Card.Title>
                                    <Card.Text >
                                        <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-primary"><span className="ms-2">Read More</span></button>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow p-3 bg-white rounded h-100 text-start card-header3">
                                {/* <Card.Img variant="top" src="" /> */}
                                <Card.Body className="text-center">
                                    <Card.Title className=""> <h3>Read our blog</h3> </Card.Title>
                                    <Card.Text >
                                        <p>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <button className="btn btn-warning"><span className="ms-2">Read More</span></button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default About;