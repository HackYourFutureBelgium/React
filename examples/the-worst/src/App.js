import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTRO IS CALLED');
    this.state = {};
    this.state.worsts = [];
    this.state.cart = [];
  }
  async onLoad() {
    console.log('ONLOAD');
    const res = await fetch('/worsts.json');
    const worsts = res.json();
    this.state.worsts = worsts;
  }

  addWorst(worst) {
    var cart = this.state.cart;
    cart.push(worst);
    this.state.cart = cart;
    this.forceUpdate();
  }

  onCheckout() { this.setState({ cart: [] })
  }

  render() {
    var worsts = [];
    for (var i = 0; i < this.state.worsts.length; i++) {
      worsts.push(this.renderWorst(this.props.worsts[i]));
    }
    var total = 0;
    for (var i = 0; i < this.state.cart.length; i++) { total += this.state.cart[i].price; }
    console.log(worsts);
    return (
      <div className="app">
        <header className="header">
          <h1>THE WORST</h1>
          <nav><button onClick={this.onLoad}>LOAD</button></nav>
        </header>
         <main>
         { worsts }
         </main>
         <footer className="footer">
           <div className="total">
           Total: {  total
           }</div>
           <div className="checkout">
           <button onClick={this.onCheckout}>CHECKOUT</button>
           </div>
         </footer>
      </div>
    );
  }

  renderWorst(worst) {
    console.log('WORST', worst);
    var result =
      <div class="worst">
        {worst.name}
        <button onClick={this.addWorst(worst)}>ADD</button>
      </div>

  }
}

export default App;
