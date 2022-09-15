import React, {
  Component,
} from "react";
import StopWatch from "./components/StopWatch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }
  render() {
    const { isVisible } = this.state;
    // if (isVisible) {
    //   return <StopWatch />;
    // }
    return (
      <>
        {isVisible && <StopWatch />}
        <button
          onClick={() =>
            this.setState({
              isVisible: !isVisible,
            })
          }
        >
          Switch
        </button>
      </>
    );
  }
}

export default App;
