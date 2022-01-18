import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logoM.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="container-fluid" sticky="top" collapseOnSelect expand="lg" bg="light" variant="dark">
            < >
                <Navbar.Brand href="#home"><img alt="" src={logo} width="50" height="40"
                    className="d-inline-block"
                /><Link className="fw-bold fs-5 text-decoration-none"><span>HealthCare Hospital</span></Link></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="fw-bold fs-5" as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link className="fw-bold fs-5" as={HashLink} to="/home#banner">About</Nav.Link>
                    <Nav.Link className="fw-bold fs-5" as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link className="fw-bold fs-5" as={HashLink} to="/facility">Our Team</Nav.Link>
                    <Nav.Link className="fw-bold fs-5" as={HashLink} to="/bookAppointment">Book Appointment</Nav.Link>
                    {user?.email ?
                        <Button className="fw-bold fs-5" onClick={logOut} variant="primary">Logout</Button> :
                        <Nav.Link className="fw-bold fs-5" as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                        <a className="fw-bold fs-5" href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Header;