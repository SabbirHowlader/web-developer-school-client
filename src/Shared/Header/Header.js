import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSchool, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then( () =>{})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/course"> <FaSchool></FaSchool> Web Developer School</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="/home">Home</Nav.Link> */}
                            <Nav.Link href="/course">Course</Nav.Link>
                            <Nav.Link href="/faq">FAQ</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button variant='light' onClick={handleLogOut}>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            {/* <Link to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link> */}
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image>
                                        : <FaUser></FaUser>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;