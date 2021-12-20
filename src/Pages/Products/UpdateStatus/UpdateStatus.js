import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UpdateStatus = () => {
  const [success, setSuccess] = useState(false);
  const handleClose = () => {
    setSuccess(false);
  };
  const [orders, setOrders] = useState([]);
  const orderId = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/order/${orderId.orderId}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orderId?.orderId]);

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrders = { ...orders };
    newOrders[field] = value;
    setOrders(newOrders);
  };

  const handleOnSubmit = (e) => {
    fetch(`http://localhost:4000/orders/${orderId.orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div className="py-4">
      <Modal
        show={success}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>Product Status Update Successfully</Modal.Body>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal>

      <Form onSubmit={handleOnSubmit}>
        <input
          className="w-100 mb-3"
          type="text"
          value={orderId.orderId}
          disabled
        />
        <Form.Select
          onChange={handleOnChange}
          aria-label="Default select example"
          name="status"
          value={orders.status}
        >
          <option value="pending">Pending</option>
          <option value="confirm">Confirm</option>
          <option value="delivered">Delivered</option>
        </Form.Select>
        <Button className="mt-3" type="submit" variant="danger">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateStatus;
