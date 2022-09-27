import React, { Component } from 'react';

class DataProvider extends Component {
  constructor (props) {
    super(props);

    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount () {
    const { fileName } = this.props;

    this.setState({ isFetching: true });
    fetch(fileName)
      .then(res => res.json())
      .then(data => this.setState({ data: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render () {
    const { render } = this.props;

    return render(this.state);
  }
}

export default DataProvider;
