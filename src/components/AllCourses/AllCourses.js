import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';

const AllCourses = () => {
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
            <h1 className="mt-3 mb-3">All Courses</h1>
            <div className="container">
                {isShowSpinner && (
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border  " role="status">
                            <span class="visually-hidden ">Loading...</span>
                        </div>
                    </div>
                )}
                <Row xs={1} md={3} className="g-4">
                    {courses.map(course => (
                        <CardDetails key={course.id} course={course}></CardDetails>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default AllCourses;