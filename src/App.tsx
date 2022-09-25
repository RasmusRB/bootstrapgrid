import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Product from './components/product';

function App() {
  return (
    <div>
      <Container style={{ margin: "50px", display: "flex", columnGap: "2%" }}>
        <Row style={{ width: "60%" }}>
          <Col ><Product name='Apple' item='Iphone 13' price={399} /></Col>
          <hr />
          <Col ><Product name='Apple' item='Iphone 12' price={299} /></Col>
        </Row>
        <Row style={{ width: "40%" }}>
          <Col><Product name='Apple' item='Iphone 13' price={399} /></Col>
          <hr />
          <Col><Product name='Apple' item='Iphone 13' price={399} /></Col>
          <hr />
          <Col><Product name='Apple' item='Iphone 13' price={399} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
