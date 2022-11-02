import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <Navbar bg="light" className='shadow-lg' expand="lg">
            <Container>
                <Navbar.Brand><Link style={{textDecoration:'none', fontWeight:'700', color:'black'}} to='/'>Best Employee</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link ><Link style={{textDecoration:'none', fontWeight:'700'}} to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link style={{textDecoration:'none', fontWeight:'700'}} to='/employee'>Emloyee</Link></Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}
export default Header;