import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import bg from '../../assets/bg.png'
import QZone from './QZone';
const RightNav = () => {
    return (
        <div>
            <h4 className='mt-5 mb-4 fw-bold'>Login With</h4>
            <Button variant="outline-primary fw-bold mb-2"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary fw-bold"><FaGithub /> Login with GitHub</Button>
            <div>
                <h4 className='mt-5 mb-4 fw-bold'>Find us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary'/> Facebook</ListGroup.Item>
                    <ListGroup.Item><AiFillTwitterCircle className='text-info'/> Twitter</ListGroup.Item>
                    <ListGroup.Item><AiFillInstagram className='text-danger'/> Instagram</ListGroup.Item>
                    
                </ListGroup>
                <QZone></QZone>
                <div className='mt-4'>
                   <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;