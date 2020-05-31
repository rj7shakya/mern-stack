import React, { useState } from "react";
import { ListGroupItem, Alert } from "reactstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Listitem from "./Listitem";
import { Form } from "./Form";

const List = ({ data, del, update, add }) => {
  const [newData, setnewData] = useState({});
  const [addPress, setaddPress] = useState(false);
  const [alert, setalert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!alert) {
      add(newData);
      setaddPress(!addPress);
    }
  };

  const onChange = (e) => {
    if (e.target.value.length === 0) {
      setalert(true);
    } else {
      setalert(false);
    }
    setnewData({ name: e.target.value });
  };

  return (
    <div>
      <div className="h2 py-3">List of data</div>
      <ListGroupItem>
        {addPress ? (
          <Form
            value="add"
            onChange={onChange}
            onSubmit={onSubmit}
            className="mb-2"
          />
        ) : (
          <div>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                setaddPress(!addPress);
                // add("rj");
              }}
            />
            <span className="font-weight-bold mx-2"> Add a data</span>
          </div>
        )}
      </ListGroupItem>
      {alert && <Alert color="danger">Please fill box</Alert>}
      {data &&
        data.map((item) => (
          <React.Fragment key={item._id}>
            <Listitem
              name={item.name}
              id={item._id}
              onDelete={del}
              onUpdate={update}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default List;
