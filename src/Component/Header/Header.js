import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import logo from '../../Image/Logo.png';
import header from '../../Image/Rectangle1.png';
import './Header.css';

const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <Navbar className="nav">
                <img className="logo" src={logo} alt=""/>
                <Form inline>
                    <FormControl type="text"  placeholder="Search your Destination" className="mr-sm-2" />
                </Form>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="menu" href="/news">News</Nav.Link>
                    <Nav.Link className="menu" href="/destination">Destination</Nav.Link>
                    <Nav.Link className="menu" href="/blog">Blog</Nav.Link>
                    <Nav.Link className="menu" href="/contact">Contact</Nav.Link>
                    <Link to="/login"><button className="btn btn-warning">log in</button></Link>
                </Navbar.Collapse>
            </Navbar>
            <Home/>
        </div>
    );
};

export default Header;