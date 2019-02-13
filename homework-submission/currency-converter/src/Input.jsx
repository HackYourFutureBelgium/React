import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyInput: "",
      rateInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    const { currencyInput, rateInput } = this.state;
    this.props.addCurrencyAction({
      currencyInput,
      rateInput
    });
    this.setState({
      currencyInput: "",
      rateInput: ""
    });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { currencyName, currencyRate } = this.state;
    console.log(this);
    return (
      <div>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input
            name="currencyInput"
            type="text"
            placeholder="Enter currency"
            value={currencyName}
            onChange={this.handleChange}
          />
          <input
            name="rateInput"
            type="number"
            min="0"
            step="0.01"
            placeholder="Exchange rate"
            value={currencyRate}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add currency" />
        </form>
      </div>
    );
  }
}

export default Input;
