import React from "react";

export const Form = ({ value, onChange, onSubmit, def }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          defaultValue={def}
          placeholder={value === "add" ? "new name" : "edit name"}
          onChange={onChange}
        />
        <input
          type="submit"
          value={value === "add" ? "Add name" : "Update name"}
          className="ml-3"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
};
