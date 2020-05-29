import React, { Component } from "react";
import axios from "axios";

import List from "../components/List";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  async onDelete(id) {
    const data = await axios.delete(`/data/${id}`);
    if (data) {
      this.setState({
        datas: [...this.state.datas.filter((e) => e._id !== id)],
      });
    }
  }

  async onUpdate(id, data) {
    const newData = await axios.patch(`/data/${id}`, data);
    if (newData) {
      const newList = this.state.datas.map((item) => {
        if (item._id === id) {
          const updatedItem = {
            ...item,
            name: newData.data.name,
          };
          return updatedItem;
        }
        return item;
      });
      this.setState({ datas: [...newList] });
    }
  }

  async onAdd(data) {
    const newData = await axios.post("/data", data);
    if (newData) {
      this.setState({ datas: [...this.state.datas, newData.data] });
    }
  }

  render() {
    return (
      <div className="container">
        <List
          data={this.state.datas}
          del={this.onDelete}
          update={this.onUpdate}
          add={this.onAdd}
        />
      </div>
    );
  }

  async componentDidMount() {
    try {
      const res = await axios.get("/data");
      this.setState({ datas: [...res.data] });
    } catch (error) {
      console.log(error);
    }
  }
}
