import React from 'react'
import { ListGroupItem } from 'reactstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Listitem from './Listitem';

const List = ({ data, del, edit, add }) => {

  return (

    <div>
      <div className="h2 py-3">List of data</div>
      <ListGroupItem> <FontAwesomeIcon icon={faPlus} onClick={()=>{add('rj')}} />
        <span className="font-weight-bold mx-2"> Add a data</span>
      </ListGroupItem>
      {data && data.map((item) => (
        <React.Fragment key={item._id}>
          <Listitem name={item.name} id={item._id} onDelete={del} onEdit={edit} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default List;