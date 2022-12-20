import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Library Portal</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="card">View All Book</Nav.Link>
                        <Nav.Link href="add">Add Book</Nav.Link>
                        <Nav.Link href="contact">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header