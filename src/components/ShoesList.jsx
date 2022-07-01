import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import data from "../data/data.json";
import Shoes from "./Shoes";

export default class ShoesList extends Component {
  render() {
    return (
      <Row>
        {data.map((item) => {
          return (
            <Col>
              <Shoes
                key={item.id}
                addToCart={this.props.addToCart}
                shoes={item}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
}
