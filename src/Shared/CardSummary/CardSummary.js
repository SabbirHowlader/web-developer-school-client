import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye } from "react-icons/fa";



const CardSummary = ({ card }) => {
    const { title, image_url, details, total_view } = card;
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className='mb-4'  style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image_url
                            } />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {details}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Button variant="primary">Buy Now</Button>
                                    <div>
                                        <p> <FaEye className='text-warning'></FaEye> {total_view}</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CardSummary;