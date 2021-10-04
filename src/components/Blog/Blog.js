import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Blog.css"

const Blog = () => {
    // const blogposts = 
    const [blogposts, setBlogposts] = useState([]);
    useEffect(() => {
        fetch('./blog.JSON')
            .then(response => response.json())
            .then(json => setBlogposts(json))
    }, []);
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Our Blogs</h1>
            <Row xs={1} md={3} className="g-4">
                {blogposts.map(blog => (
                    <Col>
                        <Card className="shadow p-3 bg-white rounded h-100 text-start blogedit">
                            <Card.Img variant="top" src={blog.img} />
                            <Card.Body>
                                <Card.Title> <h4>{blog.name}</h4> </Card.Title>
                                <Card.Text className="textp">
                                    <p>{blog.details}</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg bg-white">
                                <button className="btn btn-warning"><span className="ms-2">READ MORE</span></button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Blog;