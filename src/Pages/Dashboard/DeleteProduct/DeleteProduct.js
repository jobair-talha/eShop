import React from "react";
import { useParams } from "react-router-dom";
import "./DeleteProduct.css";

const DeleteItem = () => {
  const id = useParams();
  return (
    <div className="delete-item">
      <form>
        <div className="d-flex">
          <input
            className="field me-3 form-control"
            type="text"
            value={id.id}
          />
          <button className="px-3 py-1" type="submit">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteItem;
