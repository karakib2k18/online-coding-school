import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> This is coding teachingonlineplatform. Here we teach diffent type of technology, like MERN stack, LAMPP stack. Python-Javascript stack. We teach python, c++, java, Javascript, Golang.
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
                    <h3 className="text-white ms-3">Contact Us</h3>
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> Dhaka, Bangladesh </p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+88)01645765434</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="gmail.com"> codingschool@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <div className="text-white ms-3">
                        <h3>Categories</h3>
                        <h6>Machine Learning</h6>
                        <h6>Web Design</h6>
                        <h6>Web Development</h6>
                        <h6>Deep Learning</h6>
                        <h6>Airtificial Inteligence</h6>
                    </div>

                </div>
                <p className="name text-center pt-3"> Coding School &copy; 2016</p>
            </footer>
        </div>
    );
};

export default Footer;

