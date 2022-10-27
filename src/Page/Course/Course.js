import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CardSummary from '../../Shared/CardSummary/CardSummary';
import LeftSideNave from '../../Shared/LeftSideNav/LeftSideNave';

const Course = () => {
    const allCard = useLoaderData();
    console.log(allCard);
    return (
        <Container>
            <Row >
                <Col lg="4">
                    <LeftSideNave></LeftSideNave>
                </Col>
                <Col lg="8">
                    <div>
                        <h2 className='text-center'>Feature Courses</h2>
                        <div  className='row gap-5'>
                            {
                                allCard.map(card => <CardSummary
                                    key={card.id}
                                    card={card}
                                ></CardSummary>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;