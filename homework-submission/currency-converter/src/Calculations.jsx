import React, { Component } from "react";

class Calculations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountToChange: "",
      chosenCurrency: "",
      currencyInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { amountToChange, chosenCurrency } = this.state;
    const currenciesFromInput = this.props.currencyList.map(element => element);
    const listToRender = currenciesFromInput.map(
      ({ currencyInput, rateInput }) => (
        <option label={currencyInput} value={rateInput}>
          {currencyInput}
        </option>
      )
    );
    console.log(this.state);
    return (
      <div>
        <h4>select amount and currency</h4>
        <input
          name="amountToChange"
          type="range"
          min="0"
          max="10000"
          step="0,1"
          onChange={this.handleChange}
        />
        &nbsp;
        <select name="chosenCurrency" onChange={this.handleChange}>
          <option>Choose from the list</option>
          {listToRender}
        </select>
        <h4>
          Fro {amountToChange} EURO, you will get{" "}
          {Math.round(amountToChange * chosenCurrency * 100) / 100}
        </h4>
      </div>
    );
  }
}

export default Calculations;
