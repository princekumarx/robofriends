import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(`error ${error} info ${info}`);
  }

  render() {
    if (this.state.hasError) {
      return <h1>oops! there is something wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
