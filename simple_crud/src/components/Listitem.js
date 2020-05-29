import React, { useState } from "react";
import { ListGroupItem, Alert } from "reactstrap";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form } from "./Form";

const Listitem = ({ name, id, onDelete, onUpdate }) => {
  const [editPress, seteditPress] = useState(false);
  const [newData, setNewData] = useState({});
  const [alert, setalert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(id, newData);
    seteditPress(!editPress);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      console.log("empty");
      setalert(true);
    } else {
      setalert(false);
    }
    setNewData({ name: e.target.value });
  };

  return (
    <div>
      <ListGroupItem>
        {name}
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={() => {
            onDelete(id);
          }}
          className="float-right"
        />
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => {
            seteditPress(!editPress);
            // onUpdate(id);
          }}
          className="float-right mr-3"
        />
      </ListGroupItem>
      {editPress && (
        <ListGroupItem>
          <Form
            value="edit"
            def={name}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </ListGroupItem>
      )}
      {alert && <Alert color="danger">Please fill box</Alert>}
    </div>
  );
};

export default Listitem;
