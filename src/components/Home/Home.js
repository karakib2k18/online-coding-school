import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./course.JSON')
            .then(response => response.json())
            .then(json => setCourses(json))
    }, []);
    return (
        <div>
            <h1 className="mt-5 mb-5">Popular Courses</h1>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {courses.slice(0, 4).map(course => (
                        <CardDetails key={course.id} course={course}></CardDetails>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;