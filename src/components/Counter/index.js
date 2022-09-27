import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = e => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({
      count: count + step,
    });
  };

  decrement = e => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({
      count: count - step,
    });
  };

  render () {
    const { count } = this.state;
    const { step } = this.props;
    return (
      <>
        <div>{count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default Counter;
