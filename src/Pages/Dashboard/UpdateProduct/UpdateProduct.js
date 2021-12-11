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
    fetch(`http://localhost:4000/product/${id}`)
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
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...product };
    newProductData[field] = value;
    setProduct(newProductData);
  };

  const handleOnSubmit = (e) => {
    fetch(`http://localhost:4000/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
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
    <div>
      <Modal
        show={success}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>Product Update Successfully</Modal.Body>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal>

      <Form onSubmit={handleOnSubmit} className="py-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product ID</Form.Label>
          <Form.Control
            value={product._id}
            type="text"
            placeholder="Product ID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            name="name"
            value={product.name}
            type="text"
            placeholder="Product Name"
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              value={product.price}
              name="price"
              type="number"
              placeholder="Price"
            />
          </Form.Group>

          <Form.Group className="mb-3 width" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              onChange={handleOnChange}
              value={product.rating}
              name="rating"
              type="number"
              placeholder="Rating"
            />
          </Form.Group>
        </div>

        <div className="d-flex justify-content-between">
          <Form.Select
            onChange={handleOnChange}
            value={product.catagories}
            name="catagories"
            className="width"
            aria-label="Default select example"
          >
            <option>Catagories</option>
            <option value="desktop">desktop</option>
            <option value="laptop">laptop</option>
            <option value="components">components</option>
            <option value="ups">ups</option>
            <option value="monitor">monitor</option>
            <option value="equipment">equipment</option>
            <option value="tablet">tablet</option>
            <option value="earphone">earphone</option>
            <option value="camera">camera</option>
            <option value="tv">tv</option>
            <option value="ac">ac</option>
            <option value="accessories">accessories</option>
            <option value="gaming">gaming</option>
          </Form.Select>

          <Form.Select
            onChange={handleOnChange}
            value={product.type}
            name="type"
            className="width"
            aria-label="Default select example"
          >
            <option>Type</option>
            <option value="gaming desktop">gaming desktop</option>
            <option value="budge pc">budge pc</option>
            <option value="processor">processor</option>
            <option value="cpu cooler">cpu cooler</option>
            <option value="motherboard">motherboard</option>
            <option value="ssd">ssd</option>
            <option value="graphic card">graphic card</option>
            <option value="pen drive">pen drive</option>
            <option value="ram">ram</option>
            <option value="hard disk">hard disk</option>
            <option value="projector">projector</option>
            <option value="printer">printer</option>
            <option value="scanner">scanner</option>
            <option value="ribbon">ribbon</option>
            <option value="securiy camera">securiy camera</option>
            <option value="dslr camera">dslr camera</option>
            <option value="smart tv">smart tv</option>
            <option value="4k tv">4k tv</option>
            <option value="led">led</option>
            <option value="ac">ac</option>
            <option value="keyboard">keyboard</option>
            <option value="mouse">mouse</option>
            <option value="mouse pad">mouse pad</option>
            <option value="headphone">headphone</option>
            <option value="earphone">earphone</option>
            <option value="memory">memory</option>
            <option value="power bank">power bank</option>
            <option value="modem">modem</option>
            <option value="speaker">speaker</option>
          </Form.Select>

          <Form.Select
            onChange={handleOnChange}
            value={product.availabilities}
            name="availabilities"
            className="width"
            aria-label="Default select example"
          >
            <option>Availability</option>
            <option value="in stoke">In Stoke</option>
            <option value="stoke out">Stoke Out</option>
            <option value="upcoming">Upcoming</option>
          </Form.Select>

          <Form.Select
            onChange={handleOnChange}
            value={product.brand}
            name="brand"
            className="width"
            aria-label="Default select example"
          >
            <option>Brand</option>
            <option value="apple pc">apple pc</option>
            <option value="hp">hp</option>
            <option value="asus">asus</option>
            <option value="acer">acer</option>
            <option value="apple">apple</option>
            <option value="microsoft">microsoft</option>
            <option value="maxgreen">maxgreen</option>
            <option value="technoware">technoware</option>
            <option value="prolink">prolink</option>
            <option value="appollo">appollo</option>
            <option value="dell">dell</option>
            <option value="samsung">samsung</option>
            <option value="itab">itab</option>
            <option value="huawei">huawei</option>
            <option value="uiisii">uiisii</option>
            <option value="qkz">qkz</option>
            <option value="midea">midea</option>
            <option value="gree">gree</option>
            <option value="elite">elite</option>
          </Form.Select>
        </div>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={product.details}
            name="details"
            as="textarea"
            placeholder="Description"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProduct;
