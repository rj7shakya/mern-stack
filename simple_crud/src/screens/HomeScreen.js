import React, { Component } from 'react';
import axios from 'axios';

import List from '../components/List';

export default class HomeScreen extends Component {
  state={
    datas:[],
  };
  render() {
    return (
      <div className="container">
        <List data={this.state.datas} />
      </div>
    )
  }

  async componentDidMount(){
    try {
      const res = await axios.get('/data');
      this.setState({datas:[...res.data]});
    } catch (error) {
      console.log(error);
    }
  }
}
