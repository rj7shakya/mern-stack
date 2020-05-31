import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import MainForm from "../components/Form";
import axios from "axios";




const Edit = ({ update, data, match }) => {
  // console.log(match.params.id);
  const [item, setItem] = useState({});

  useEffect( () => {
    async function getData(){
      
      try {
        const res = await axios.get(`/data/${match.params.id}`)
        console.log(res.data);
        setItem({item:[...res.data ]});
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    console.log('item',item);
  }, []);
  return (
    <div className="container pt-4 ">
      {item.item}
      {/* <MainForm
        value="update"
        operation={update}
        def={data}
        className="mb-2"
      /> */}
    </div>
  );
};

export default withRouter(Edit);
