import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Sundorbon = () => {
    const history = useHistory()
    const handleBooking = () =>{
        history.push('/booking');
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-5 p-5">
                <h2 className="display-4">Sundorbon</h2>   
                <p style={{color: 'black'}}>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.</p> 
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

export default Sundorbon;