import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSchool } from "react-icons/fa";


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"> <FaSchool></FaSchool> Web Developer School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/course">Course</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;