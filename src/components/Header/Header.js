
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const headerStyle = {
        fontWeight: "bold",
        color: "red"
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="/home">Coding School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink className="nav-link" to="/home" activeStyle={headerStyle}>Home </NavLink>
                            <NavLink className="nav-link" to="/about" activeStyle={headerStyle}>About </NavLink>
                            <NavLink className="nav-link" to="/courses" activeStyle={headerStyle}>Courses </NavLink>
                            <NavLink className="nav-link" to="/blog" activeStyle={headerStyle}>Blog </NavLink>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;