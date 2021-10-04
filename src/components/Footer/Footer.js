import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <p className="about">
                                <span> About the company</span> This is coding teaching online platform. Here we teach diffent type of technology, like MERN stack, LAMPP stack. Python-Javascript stack. We teach python, c++, java, Javascript, Golang.
                            </p>
                            <div className="icons">
                                <h4 className="text-white">Follow Us</h4>
                                <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.facebook.com/"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.facebook.com/"><i className="fab fa-google-plus"></i></a>
                                <a href="https://www.facebook.com/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="footer-center col-md-3 col-sm-6">
                            <h3 className="text-white ms-3 mb-2">Contact Us</h3>
                            <div>
                                <i className="fa fa-map-marker"></i>
                                <p>Dhaka, Bangladesh </p>
                            </div>
                            <div>
                                <i className="fa fa-phone contactedit"></i>
                                <p> (+88)01645765434</p>
                            </div>
                            <div>
                                <i className="fa fa-envelope"></i>
                                <p> codingschool@gmail.com</p>
                            </div>
                          
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <div className="text-white">
                                <div className="categ">
                                    <h3 className="mb-3">Categories</h3>
                                    <p>Machine Learning</p>
                                    <p>Web Design</p>
                                    <p>Web Development</p>
                                    <p>Deep Learning</p>
                                    <p>Airtificial Inteligence</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="text-white">
                                <div>
                                    <h1 className="text-white mb-3">Subscribe</h1>
                                    <Form className="d-flex ">
                                        <FormControl
                                            type="text"
                                            placeholder="subscribe here"
                                            className="me-2"
                                            aria-label="subscribe"
                                        />
                                        <Button variant="btn btn-success">Submit</Button>
                                    </Form>
                                </div>

                            </div>
                        </div>
                      <div>  <p className="name text-center mt-3"> Coding School &copy; 2021</p></div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

