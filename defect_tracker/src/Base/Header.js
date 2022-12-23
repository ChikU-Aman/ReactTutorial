import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthenticationService from '../Service/Auth.service';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const CheckUserIsLogged =()=>{
        console.log(AuthenticationService.getLoggedInUser());
        setUsername(AuthenticationService.getLoggedInUser()==""?"Login":AuthenticationService.getLoggedInUser());
    }

    const clickHandler = () =>{
        if(AuthenticationService.getLoggedInUser()!=null){
            AuthenticationService.logoutUser();
            navigate("/login");
        }
        else{
            navigate("/login");
        }
    }

    useEffect(() => {
        CheckUserIsLogged();
    });
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="dashboard">Defects Tracker</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="AddDefect">Add Defects </Nav.Link>
                        <Nav.Link href="dashboard">View My Defects</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a onClick={clickHandler}>{username}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header