import React, { Component } from "react";
import CardList from "./card/Cardlist";
import SearchBox from "./Searchbox";
import "./App.css";
import { robots } from "./robots";
import "tachyons";
import ErrorBoundry from "./errorBoundry";
// import { rootCertificates } from 'tls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  Holdup = e => {
    this.setState({
      searchfield: e.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(search => {
      return search.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });
    return (
      <div className="t">
        <h1 className="f2  ">RoboFriends</h1>

        <SearchBox holdup={this.Holdup} />
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
