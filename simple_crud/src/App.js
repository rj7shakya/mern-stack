import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import HomeScreen from "./screens/HomeScreen";
import Add from "./screens/Add";
import Edit from "./screens/Edit";
import { NavBar } from "./components/Navbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
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
    axios
      .delete(`/data/${id}`)
      .then((data) => {
        this.setState({
          datas: [...this.state.datas.filter((e) => e._id !== id)],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async onUpdate(id, data) {
    await axios
      .patch(`/data/${id}`, data)
      .then((newData) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async onAdd(data) {
    await axios
      .post("/data", data)
      .then((newData) => {
        this.setState({ datas: [...this.state.datas, newData.data] });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomeScreen
                data={this.state.datas}
                del={this.onDelete}
                update={this.onUpdate}
                add={this.onAdd}
              />
            </Route>
            <Route exact path="/add">
              <Add add={this.onAdd} />
            </Route>
            <Route exact path="/edit/:id">
              <Edit update={this.onUpdate} data={this.state.datas} />
            </Route>
          </Switch>
        </div>
      </Router>
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

export default App;
