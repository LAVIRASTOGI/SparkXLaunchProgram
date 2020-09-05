import './App.scss';

import {Col, Container, Row}from 'react-bootstrap'

import FilterUser from './components/Filter/filterUser'
import Footer from './components/footer'
import Header from './components/header'
import React from 'react';
import SpaceXUserList from './components/SpaceXUser/spaceXUser'

function App() {
  return (
    <div className="app">
      <Container fluid>
   <Header></Header>
   
   <Row>
    <Col xs={12} md={3} style={{marginTop:'0.5rem'}}>
      <FilterUser></FilterUser>
    </Col>
    <Col xs={12} md={9}>
      <SpaceXUserList></SpaceXUserList>
    </Col>
  
  </Row>

   
   <Footer></Footer>
   </Container>
    </div>
  );
}

export default App;
