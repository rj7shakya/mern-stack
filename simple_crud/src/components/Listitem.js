import React, { useState } from "react";
import { ListGroupItem, Alert } from "reactstrap";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Listitem = ({ item, id, onDelete, onUpdate }) => {
  const newTo = { 
    pathname: `/edit/${id}`, 
    param1: "Par1" 
  };
  
  return (
    <div>
      <ListGroupItem>
        <span className="font-weight-bold">{item.name}</span>
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => {
            onDelete(id);
          }}
          className="float-right"
        />
        <Link to={newTo}>
          <FontAwesomeIcon
            icon={faPen}
            style={{ color: "black" }}
            className="float-right mr-3"
          />
        </Link>
        <div>{item.email}</div>
        <div>{item.dob.substring(0,10)}</div>
        <div>{item.address}</div>
        <div>{item.contact}</div>
      </ListGroupItem>
    </div>
  );
};

export default Listitem;
