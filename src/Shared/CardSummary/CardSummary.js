import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye } from "react-icons/fa";



const CardSummary = ({ card }) => {
    const { title, image_url, details, total_view ,price} = card;
    return (
        
           
                    <Col md={6} lg={4}>
                        <Card className='mb-4'  style={{ width: '18rem' }}>
                            <Card.Img style={{height:'250px',weight: '350px'}} variant="top" src={image_url
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
                

    );
};

export default CardSummary;