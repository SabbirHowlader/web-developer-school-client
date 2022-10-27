import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Course from '../../Page/Course/Course';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import LeftSideNave from '../../Shared/LeftSideNav/LeftSideNave';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Container> 
                <Row>
                    <Col lg="4">
                        <LeftSideNave></LeftSideNave>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;