import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const totalPrice = this.props.cart.reduce((total, item) => {
      const { price, quantity } = item;
      total += parseInt(price) * parseInt(quantity);
      return total;
    }, 0);
    const cartNum = this.props.cart.reduce((_, item) => {
      _ += item.quantity;
      return _;
    }, 0);
    return (
      <div>
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start active"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                Total: <span className="text-light">{totalPrice || 0}$</span>
              </h5>
              <h2 className="text-light">{cartNum}</h2>
            </div>
            {this.props.cart.map((item) => {
              const { name, quantity } = item;
              return (
                <p key={name} className="mb-1">
                  {name} x{quantity}
                </p>
              );
            })}
          </a>
          {this.props.cart.map((item) => {
            const { image, price, name, quantity } = item;
            return (
              <a
                key={name}
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <img style={{ width: "150px" }} src={image} alt="shoes" />
                  <h2 className="mb-1 d-flex align-item-center text-success">
                    {quantity}
                  </h2>
                </div>
                <p className="mb-1">{name}</p>
                <small className="text-success">{price}$</small>
              </a>
            );
          })}

          {this.props.cart.length > 0 && (
            <div
              style={{ columnGap: "20px" }}
              className="d-flex w-100 mt-2 justify-content-end"
            >
              <button className="btn btn-success mr-3">checkout</button>
              <button
                onClick={this.props.clearCart}
                className=" btn btn-primary"
              >
                clear cart
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
