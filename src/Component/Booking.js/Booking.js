import { Map } from 'google-maps-react';
import React from 'react';
import { Card } from 'react-bootstrap';
import img from '../../Image/Rectangle 26.png';
import img2 from '../../Image/Rectangle 27.png';
import img3 from '../../Image/Rectangle 28.png';
import './Booking.css';


const Booking = () => {
  return (
        <div>
            <div className="row">
                <Card className="col-md-3">
                    <Card.Img src={img} alt="Room"/>
                </Card>
                <Card className="col-md-3">
                    <Card.Body>
                        <Card.Title>Light bright airy stylish apt  safe peaceful stay</Card.Title>
                        <Card.Text><small className="text-muted">4 guest 2 bedrooms 2 beds 2 baths</small></Card.Text>
                        <Card.Text><small className="text-muted">Wifi conditioning Kitchen</small></Card.Text>
                        <Card.Text><small className="text-muted">ancellation flexibility available</small></Card.Text>
                        <Card.Text><small className="text-muted">4.9(20) </small></Card.Text>
                        <Card.Text><small className="text-muted">$34/night $167 total</small></Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="row">
                <Card className="col-md-3">
                    <Card.Img src={img2} alt="Room"/>
                </Card>
                <Card className="col-md-3">
                    <Card.Body>
                        <Card.Title>Light bright airy stylish apt  safe peaceful stay</Card.Title>
                        <Card.Text><small className="text-muted">4 guest 2 bedrooms 2 beds 2 baths</small></Card.Text>
                        <Card.Text><small className="text-muted">Wifi conditioning Kitchen</small></Card.Text>
                        <Card.Text><small className="text-muted">ancellation flexibility available</small></Card.Text>
                        <Card.Text><small className="text-muted">4.9(20) </small></Card.Text>
                        <Card.Text><small className="text-muted">$34/night $167 total</small></Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="row">
                <Card className="col-md-3">
                    <Card.Img src={img3} alt="Room"/>
                </Card>
                <Card className="col-md-3">
                    <Card.Body>
                        <Card.Title>Light bright airy stylish apt  safe peaceful stay</Card.Title>
                        <Card.Text><small className="text-muted">4 guest 2 bedrooms 2 beds 2 baths</small></Card.Text>
                        <Card.Text><small className="text-muted">Wifi conditioning Kitchen</small></Card.Text>
                        <Card.Text><small className="text-muted">ancellation flexibility available</small></Card.Text>
                        <Card.Text><small className="text-muted">4.9(20) </small></Card.Text>
                        <Card.Text><small className="text-muted">$34/night $167 total</small></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
  );
};

export default Booking;