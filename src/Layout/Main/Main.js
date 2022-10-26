import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../../Page/Course/Course';
import LeftSideNave from '../../Shared/LeftSideNav/LeftSideNave';

const Main = () => {
    return (
        <div>
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
        </div>
    );
};

export default Main;