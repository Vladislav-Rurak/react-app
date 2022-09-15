import React, {
  Component,
} from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.timerId = null;
    console.log("constr");
  }

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.stop();
  }

  tick = () =>
    this.setState((state) => ({
      count: state.count + 1,
    }));

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(
        this.tick,
        1000
      );
    }
  };

  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;

    console.log("render");

    return (
      <article>
        <div>{count}</div>
        <button onClick={this.start}>
          Start
        </button>
        <button onClick={this.stop}>
          Stop
        </button>
        <button onClick={this.reset}>
          Reset
        </button>
      </article>
    );
  }
}

export default StopWatch;
