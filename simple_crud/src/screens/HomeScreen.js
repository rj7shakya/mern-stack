import React, { Component } from "react";

import List from "../components/List";

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <List
          data={this.props.data}
          del={this.props.del}
          update={this.props.update}
          add={this.props.add}
        />
      </div>
    );
  }
}
