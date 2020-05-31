import React from "react";
import { ListGroupItem } from "reactstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Listitem from "./Listitem";
import { Link } from "react-router-dom";

const List = ({ data, del, update, add }) => {
  return (
    <div>
      <div className="h2 py-3">List of data</div>
      <ListGroupItem>
          <Link to="/add">
            <FontAwesomeIcon icon={faPlus} style={{ color: "black" }} />
          </Link>
          <span className="font-weight-bold mx-2"> Add a data</span>
      </ListGroupItem>
      {data &&
        data.map((item) => (
          <React.Fragment key={item._id}>
            <Listitem
              item={item}
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
