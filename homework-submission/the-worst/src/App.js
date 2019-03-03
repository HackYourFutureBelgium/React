import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cart: []
    };

    this.onCheckout = this.onCheckout.bind(this);
  }

  componentDidMount() {
    fetch("/worsts.json")
      .then(response => response.json())
      .then(result => {
        console.log("componentDidMount: result: ", result);
        if (result.status === "ok") {
          this.setState({
            products: result.worsts
          });
        } else {
          console.error("Error loading products: ");
        }
      })
      .catch(error => console.error(error));
  }

  addProduct(product) {
    let cart = this.state.cart;
    cart.push(product);
    this.setState({ cart: cart });
  }

  onCheckout() {
    this.setState({ cart: [] });
  }

  render() {
    let total = this.state.cart.reduce(
      (prev, product) => prev + product.price,
      0
    );

    return (
      <div className="app container-fluid shadow-lg bg-white rounded">
        <header className="header row">
          <h1 className="col">THE NOT SO BAD</h1>
        </header>
        <main className="table table-hover table-responsive">
          <table className="table table-striped col-lg">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th cope="col">Action</th>
              </tr>
            </thead>
            <tbody>{this.renderProducts()}</tbody>
          </table>
        </main>
        <footer className="row">
          <span className="col total">Total: {total.toFixed(2)}</span>
          <button className="col btn btn-primary" onClick={this.onCheckout}>
            Checkout
          </button>
        </footer>
      </div>
    );
  }

  renderProducts() {
    console.log("renderProducts");

    return this.state.products.map(worst => {
      return (
        <tr key={worst.id}>
          <td>{worst.name}</td>
          <td>{worst.price}</td>
          <td>
            <button
              className="col btn btn-outline-primary"
              onClick={e => this.addProduct(worst)}
            >
              Add
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default App;
