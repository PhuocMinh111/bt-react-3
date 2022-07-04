import { useState } from "react";
import React from "react";
import "./App.css";
import { Col, Modal, Button, Container, Row, Nav } from "react-bootstrap";
import ShoesList from "./components/ShoesList";
import data from "./data/data.json";
import { Accordion } from "react-bootstrap";
import Cart from "./components/Cart";
class App extends React.Component {
  state = {
    cart: [],
  };
  addToCart = (id) => {
    const prod = data.find((item) => item.id == id);
    let isAdd = false;
    this.state.cart.forEach((item) => {
      if (item.id == id) isAdd = true;
    });
    console.log(isAdd);
    if (isAdd) {
      this.state.cart = this.state.cart.filter((item) => {
        if (item.id != id) return item;
        return { ...item, quantity: ++item.quantity };
      });
      this.setState({
        cart: [...this.state.cart],
      });
    }

    if (!isAdd) {
      this.state.cart.push({ ...prod, quantity: 1 });
      this.setState({
        cart: [...this.state.cart],
      });
    }
    console.log(this.state.cart);
  };

  render() {
    const cartNum = this.state.cart.reduce((_, item) => {
      _ += item.quantity;
      return _;
    }, 0);
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
                  Cart ({cartNum})
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
                  {/* <ShoesList /> */}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <Cart cart={this.state.cart} />
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
