import React, { Component } from 'react';
import axios from 'axios';

import List from '../components/List';

export default class HomeScreen extends Component {
  state={
    datas:[],
  };
 
  render() {
    const onDelete = async (id)=>{
      console.log(`deleting at ${id}`)
      // const data = axios
    }

    const onEdit = (id)=>{
      console.log(`editing at ${id}`)
    }

    const onAdd = (data)=>{
      console.log(`adding data ${data}`)
    }

    return (
      <div className="container">
        <List data={this.state.datas} del={onDelete} edit={onEdit} add={onAdd} />
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
