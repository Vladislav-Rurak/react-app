import { PureComponent } from 'react';

class Counter extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // shouldComponentUpdate (nextProps, nextState) {
  //   const { count } = this.state;

  //   return count !== nextState.count;
  // }

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
