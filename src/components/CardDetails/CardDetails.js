import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./CardDetails.css"

const CardDetails = (props) => {
    const { img, price, name, instructor, rating, hours, people, language, enrolled } = props.course;
    return (
        <>
            <Col>
                <Card className="shadow p-3 bg-white rounded h-100 text-start">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h5>Price: ${price} </h5>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="textp">
                            <p>Instructor: {instructor}</p>
                            <p>Ratings: {rating} ({people} Reviews)</p>
                            <p>Duration: {hours}</p>
                            <p>Enrolled: {enrolled}</p>
                            <p>Language: {language}</p>
                          
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg bg-white">
                        <button className="btn btn-warning"><i class="fas fa-shopping-cart"></i> <span className="ms-2">Add to Cart</span></button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default CardDetails;