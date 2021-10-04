import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-7 col-sm-6">
                    <p className="about">
                        <span> About the company</span> This is coding teaching online platform. Here we teach diffent type of technology, like MERN stack, LAMPP stack. Python-Javascript stack. We teach python, c++, java, Javascript, Golang.
                    </p>
                    <div className="icons">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-google-plus"></i></a>
                        <a href="https://www.facebook.com/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <h2 className="text-white ms-3">Contact Us</h2>
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>Dhaka, Bangladesh </p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+88)01645765434</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p> codingschool@gmail.com</p>
                    </div>
                </div>
                <div className="footer-right col-md-2 col-sm-6">
                    <div className="text-white">
                        <div>
                            <h1 className="text-white mb-3">Subscribe</h1>
                            <Form className="d-flex w-50">
                                <FormControl
                                    type="text"
                                    placeholder="subscribe here"
                                    className="me-2"
                                    aria-label="subscribe"
                                />
                                <Button variant="btn btn-success">Submit</Button>
                            </Form>
                        </div>
                        <div className="mt-4">
                            <h3>Categories</h3>
                            <h6>Machine Learning</h6>
                            <h6>Web Design</h6>
                            <h6>Web Development</h6>
                            <h6>Deep Learning</h6>
                            <h6>Airtificial Inteligence</h6>
                        </div>
                    </div>
                </div>
                <p className="name text-center mt-3"> Coding School &copy; 2021</p>
            </footer>
        </div>
    );
};

export default Footer;

