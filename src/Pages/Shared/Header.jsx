import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-bold text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='bg-light py-3 px-4'>
                <div className='d-flex'>
                    <Button variant="danger">Latest</Button>
                    <Marquee speed={100} className='text-danger fw-bold bg-light'>
                        গার্লফ্রেন্ড চাই না, Tinder-এ রাখি পরানোর জন্য বোন পাতালেন যুবক!
                    </Marquee>
                    
                </div>
            </div>
            
        </Container>
    );
};

export default Header;