// снипед (быстрая генерация) rcc

import React, { Component } from 'react';

class Counter extends Component {
  // rconst
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // ОБРАБОТЧИКИ ДЕЛАЕМ СТРЕЛКАМИ (или bind)
  increment = e => {
    // this.state.count++; напрямую не поменяешь как в JS
    const { count } = this.state;
    const { step } = this.props;
    this.setState({
      count: count + step, // для рендера
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
        <div>
          {count} : {step}
        </div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default Counter;
