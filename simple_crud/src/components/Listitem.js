import React,{useState} from "react";
import { ListGroupItem } from "reactstrap";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form } from "./Form";

const Listitem = ({ name, id, onDelete, onUpdate }) => {
  const [editPress, seteditPress] = useState(false);
  const [newData, setNewData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(id,newData);
    seteditPress(!editPress);
  };

  const onChange = (e) => {
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
      {editPress && <ListGroupItem>
        <Form value="edit" def={name} onChange={onChange} onSubmit={onSubmit} />
      </ListGroupItem>}
    </div>
  );
};

export default Listitem;
