import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Sreemongol = () => {
    const history = useHistory()
    const handleBooking = () =>{
        history.push('/booking');
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-5 p-5">
                <h2 className="display-4">Sreemongol</h2>   
                <p style={{color: 'black'}}>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots.</p> 
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

export default Sreemongol;