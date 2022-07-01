import { useState } from "react";
import React from "react";
import "./App.css";
import { Col, Modal, Button, Container, Row, Nav } from "react-bootstrap";
import ShoesList from "./components/ShoesList";
import { Accordion } from "react-bootstrap";
class App extends React.Component {
  render() {
    return (
      <Container>
        <Container className="text-center p-4">
          <h2>Shoes Shop</h2>
        </Container>
        <Container fluid="xl">
          <Row>
            <Col md={2}>
              <ul className="list-group my-auto">
                <li className="list-group-item">
                  <button style={{ border: "none" }} className="btn">
                    Home
                  </button>
                </li>
                <li className="list-group-item">
                  <button style={{ border: "none" }} className="btn">
                    Cart
                  </button>
                </li>
              </ul>
            </Col>
            <Col md={10}>
              <Accordion.Item enventKey="0">
                <ShoesList />
              </Accordion.Item>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
