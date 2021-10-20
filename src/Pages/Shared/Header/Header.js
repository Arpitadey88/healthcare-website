import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logoM.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="container-fluid" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            < >
                <Navbar.Brand href="#home"><img alt="" src={logo} width="50" height="40"
                    className="d-inline-block"
                /><span>HealthCare Hospital</span></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#banner">About</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/facility">Our Team</Nav.Link>
                    <Nav.Link as={HashLink} to="/bookAppointment">Book Appointment</Nav.Link>
                    {user?.email ?
                        <Button onClick={logOut} variant="primary">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;