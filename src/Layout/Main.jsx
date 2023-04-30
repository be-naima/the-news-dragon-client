import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Pages/Shared/LeftNav';
import RightNav from '../Pages/Shared/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
import Login from '../Login';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
               
                <Row>
                    <Col lg={3}>
                         <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                         <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
                
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;