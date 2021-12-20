import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./DeleteProduct.css";

const DeleteItem = () => {
  const [success, setSuccess] = useState(false);
  const handleClose = (e) => {
    setSuccess(false);
  };

  const id = useParams();
  const key = id.key;
  const handleSubmit = (e) => {
    fetch(`https://mighty-crag-65021.herokuapp.com/delete/${key}`, {
      method: "DELETE",
      body: JSON.stringify(key),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div className="delete-item">
      <Modal
        show={success}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>Product Deleted Successfully</Modal.Body>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal>
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <input className="field me-3 form-control" type="text" value={key} />
          <button className="px-3 py-1" type="submit">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteItem;
