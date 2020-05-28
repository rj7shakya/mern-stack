import React, { Component } from 'react';

import List from '../components/List';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        Home Screen
        <List />
      </div>
    )
  }
}
