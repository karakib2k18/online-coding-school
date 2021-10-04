import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./CardDetails.css"

const CardDetails = (props) => {
    const { img, price, name, instructor, rating, hours, people, language, enrolled } = props.course;
    return (
        <>
            <Col>
                <Card className="shadow p-3 bg-white rounded h-100 text-start cardh4">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h5><span className="languagec">Price:  {price}$</span></h5>
                        <Card.Title> <h3>{name}</h3> </Card.Title>
                        <Card.Text className="textp">
                            <p>Instructor: {instructor}</p>
                            <p>Ratings: {rating} ({people} Reviews)</p>
                            <p>Duration: {hours} Hours</p>
                            <p>Enrolled: {enrolled}</p>
                            <p><span className="languagec">Language: {language}</span></p>
                          
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg bg-white">
                        <button  className="btn btn-warning"><i className="fas fa-shopping-cart"></i> <span className="ms-2">Add to Cart</span></button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default CardDetails;