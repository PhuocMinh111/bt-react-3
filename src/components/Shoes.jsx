import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
export default class Shoes extends Component {
  render() {
    const { shoes, add } = this.props;
    return (
      <Card
        key={shoes.id}
        className="p-3"
        style={{ width: "15rem", height: "auto" }}
      >
        <Card.Img variant="top" src={shoes.image} />
        <Card.Text>
          {shoes.name}
          <span style={{ fontWeight: "500" }} className="text-success">
            {`  ${shoes.price}`}$
          </span>
        </Card.Text>
        <Button
          style={{ width: "4rem", fontWeight: "500", marginLeft: "auto" }}
          className="p-1 "
          variant="dark"
          onClick={() => add(shoes.id)}
        >
          add{" "}
          <span className="mt-1">
            <FaCartPlus />
          </span>
        </Button>
      </Card>
    );
  }
}
