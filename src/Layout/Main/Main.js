import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../../Page/Course/Course';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import LeftSideNave from '../../Shared/LeftSideNav/LeftSideNave';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container> 
                <Row>
                    <Col lg="4">
                        <LeftSideNave></LeftSideNave>
                    </Col>
                    <Col lg="8">
                        <Course></Course>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;