import React from "react";
import "./DeleteItem.css";

const DeleteItem = () => {
  return (
    <form>
      <div className="d-flex">
        <input className="field me-3 form-control" type="text" />
        <button className="px-3 py-1" type="submit">
          Delete
        </button>
      </div>
    </form>
  );
};

export default DeleteItem;
