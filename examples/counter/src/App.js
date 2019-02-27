import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  changeCounter(operation) {
    this.setState({ counter: this.state.counter + operation });
  }
  render() {
    return (
      <div className="panel">
        <h1>
          Counter
          <span className="header-count">| {this.state.counter}</span>
        </h1>
        <button onClick={() => this.changeCounter(1)}>Increase</button>
        <button onClick={() => this.changeCounter(-1)}>Decrease</button>
      </div>
    );
  }
}
export default App;

//   state = {
//     count: 0,
//   };

//   handleIncreaseCount = () => this.setState({ count: this.state.count + 1 });
//   handleDecreaseCount = () => this.setState({ count: this.state.count - 1 });

//   render() {

//     return (
//       <div className="panel">
//         <h1>
//           Counter
//           <span className="header-count">| {this.state.count}</span>
//         </h1>
//         <button onClick={this.handleIncreaseCount}>Increase</button>
//         <button onClick={this.handleDecreaseCount}>Decrease</button>
//       </div>
//     );
//   }
// }

// export default App;
