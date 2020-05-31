import React from "react";

import MainForm from "../components/Form";

const Add = ({ add }) => {
  return (
    <div className="container pt-4 ">
      <MainForm value="add" operation={add} className="mb-2" def={[1]} />
    </div>
  );
};

export default Add;
