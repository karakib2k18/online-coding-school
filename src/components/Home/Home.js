import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';


const Home = () => {
    const [courses, setCourses] = useState([]);
    const [isShowSpinner, setIsShowSpinner] = useState(true)
    useEffect(() => {
        fetch('./course.JSON')
            .then(response => response.json())
            .then(json => {
                setCourses(json);
                setIsShowSpinner(false);
            })
    }, []);
    return (
        <div>
            <h1 className="mt-3 mb-3">Popular Courses</h1>
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {isShowSpinner && (
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="spinner-border  " role="status">
                                <span class="visually-hidden ">Loading...</span>
                            </div>
                        </div>
                    )}
                    {courses.slice(0, 4).map(course => (
                        <CardDetails key={course.id} course={course}></CardDetails>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;