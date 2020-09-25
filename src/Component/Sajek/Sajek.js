import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Sajek = () => {
    const history = useHistory()
    const handleBooking = () =>{
        history.push('/booking');
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-5 p-5">
                <h2 className="display-4">Sajek Vally</h2>   
                <p style={{color: 'black'}}>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p> 
                </div>
                <div className="col-md-6">
                    <Card className="m-5 p-5">
                        <Form>
                            <Form.Group>
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text"/>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text"/>
                                <Row>
                                    <Col>
                                        <Form.Label>Form</Form.Label>
                                        <Form.Control type="date"/>
                                    </Col>
                                    <Col>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control type="date"/>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Link><Button variant="warning" onClick={handleBooking}block>Start Booking</Button></Link>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sajek;