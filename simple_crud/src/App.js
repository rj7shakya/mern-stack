import React, { Component } from 'react';
import './App.css';

import HomeScreen from "./screens/HomeScreen";
import {NavBar} from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <HomeScreen/>
      </div>
    );
  }
}

export default App;
