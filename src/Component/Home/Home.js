import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sajek from '../../Image/Sajek.png';
import sreemongol from '../../Image/Sreemongol.png';
import sundorbon from '../../Image/sundorbon.png';
import './Home.css';


const Home = () => {
    return (
        <div className="hero-ariea">
            <section className="container">
                <div className="left-div">
                    <h1>Cox's Bazar</h1>
                    <p>It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.</p>
                    <Link to="/coxsbazar"><button className="btn btn-warning">Booking</button></Link>
                </div>
                <div className="right-div">
                <Link className="cart"  to="/sajek" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={sajek} />
                <Card.Title className="cart-title">Sajek Vally</Card.Title>
                </Link>
                <Link className="cart"  to="/sreemongol" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={sreemongol} />
                    <Card.Title className="cart-title">Sreemongol</Card.Title>
                </Link>
                <Link className="cart"  to="/sundorbon" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={sundorbon} />
                    <Card.Title className="cart-title">Sundorban</Card.Title>
                </Link>
                </div>
            </section>
            {/* <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img1}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={img1}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel> */}
        </div>
    );
};

export default Home;