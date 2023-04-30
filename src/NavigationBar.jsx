import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const btnLogOut = () =>{
        logOut()
        .then()
        .catch(console.error(error.massege))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/catagory/0">Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize:'2.3rem'}}></FaUserCircle>  </Nav.Link>}
                           
                                {user ?  <Button variant="dark" onClick={btnLogOut}>Logout</Button> :<Link to = "/login">
                                   <Button variant="dark">Login</Button></Link>
                                }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;