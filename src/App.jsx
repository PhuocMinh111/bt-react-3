import { useState } from "react";
import React from "react";
import "./App.css";
import { Col, Modal, Button, Container, Row, Nav } from "react-bootstrap";
import ShoesList from "./components/ShoesList";
import data from "./data/data.json";
import { Accordion } from "react-bootstrap";
class App extends React.Component {
  cart = [];
  addToCart = (id) => {
    const prod = data.find((item) => item.id == id);
    console.log(prod);
    this.cart.forEach((item) => {
      if (item.prod) {
        if (item.prod.id == id) {
          this.cart[item] = { ...item, quantity: item.quantity + 1 };
        }
        this.cart.push({
          prod: prod,
          quantity: 1,
        });
      }
    });
    console.log(this.cart);
  };

  render() {
    return (
      <Container fluid="lg">
        <Container className="text-center p-4">
          <h2>Shoes Shop</h2>
        </Container>
        <Container fluid="xl">
          <Row>
            <Col md={2}>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Home
                </a>
                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Cart ({9})
                </a>
              </div>
            </Col>
            <Col md={10}>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <ShoesList addToCart={this.addToCart} />
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  cart
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
