import React from 'react'

import ListItem from './Listitem';
import Listitem from './Listitem';

const  List = ({data}) => {
  console.log(data.length);
  
return (

  <div>
    List of data
    {data && data.map((item)=>(
      <React.Fragment key={item._id}>
        <Listitem name={item.name} />
      </React.Fragment>
    ))}
  </div>
)
}

export default List;