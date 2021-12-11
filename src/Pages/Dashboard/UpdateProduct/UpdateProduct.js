import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const [product, setProduct] = useState([]);
  const [success, setSuccess] = useState(false);
  const handleClose = () => {
    setSuccess(false);
  };
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/update/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      <Modal
        show={success}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>Product Added Successfully</Modal.Body>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal>

      <Form className="pt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Key</Form.Label>
          <Form.Control
            defaultValue={product._id}
            type="text"
            placeholder="Product Name"
            disabled
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" />
          </Form.Group>

          <Form.Group className="mb-3 width" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Rating" />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
          <select
            className="form-select width d-inline m-1"
            aria-label="Default select example"
          >
            <option selected>Catagories</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>

          <select
            className="form-select width d-inline m-1"
            aria-label="Default select example"
          >
            <option selected>Type</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>

          <select
            className="form-select width d-inline m-1"
            aria-label="Default select example"
          >
            <option selected>Availability</option>
            <option>In Stock</option>
            <option>Stock Out</option>
            <option>Upcoming</option>
          </select>

          <select
            className="form-select width d-inline m-1"
            aria-label="Default select example"
          >
            <option selected>Brands</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" placeholder="Description" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProduct;
