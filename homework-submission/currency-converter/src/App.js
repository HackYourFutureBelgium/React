import React, { Component } from "react";
import Input from "./Input.jsx";
import Calculations from "./Calculations.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      amount: 0,
      currencyToConvert: ""
    };
  }
  addCurrency(currency) {
    const newCurrencies = this.state.currencies;
    newCurrencies.push(currency);
    this.setState({ currencies: newCurrencies });
  }

  render() {
    const { currencies } = this.state;
    const currencyList = currencies.map(({ currencyInput, rateInput }) => (
      <li>
        {currencyInput}
        &nbsp;
        {rateInput}
      </li>
    ));

    return (
      <div>
        <h3>Currency converter</h3>
        <label className="Input">
          <Input addCurrencyAction={this.addCurrency.bind(this)} />
        </label>
        <label className="List of currency">
          <ul>{currencyList}</ul>
        </label>
        <label className="Calculation">
          <Calculations currencyList={currencies} />
        </label>
      </div>
    );
  }
}

export default App;
