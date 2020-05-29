import React from 'react';
import {  ListGroupItem } from 'reactstrap';
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Listitem = ({ name,id,onDelete,onEdit }) => {
  return (
    <div>
      <ListGroupItem>{name}
        <FontAwesomeIcon
          icon={faTrashAlt} style={{ float: 'right' }}
          onClick={() => { onDelete(id) }} />
      <FontAwesomeIcon
          icon={faPen} style={{ float: 'right',marginRight:'1rem' }}
          onClick={() => { onEdit(id) }} />
      </ListGroupItem>
    </div>
  )
}

export default Listitem;
