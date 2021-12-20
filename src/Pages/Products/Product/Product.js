import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "./Product.css";
import useAuth from "../../../hooks/useAuth";

const Product = ({ product }) => {
  const [success, setSuccess] = useState(false);
  const handleClose = () => setSuccess(false);
  const { user } = useAuth();
  const [count, setCount] = useState(1);
  const increse = () => setCount(count + 1);
  const decrese = () => setCount(count - 1);
  const {
    _id,
    name,
    catagories,
    price,
    image,
    rating,
    details,
    availabilities,
    brand,
  } = product;

  const orderProduct = {
    name: name,
    userName: user.displayName,
    email: user.email,
    quantity: count,
    key: _id,
    status: "pending",
  };
  const handleOnClick = () => {
    fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      });
  };

  return (
    <section id="product" className="py-5">
      <Container>
        <Modal
          show={success}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>Your Order Successfully</Modal.Body>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="border">
              <img
                className="w-100"
                src={`data:image/png;base64,${image}`}
                alt="product"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <h2>{name}</h2>
            <div>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </div>
            <h6 className="mt-5">
              KEY: <span> {_id}</span>
            </h6>
            <h6 className="text-uppercase mt-1">
              AVAILABILITIES:{" "}
              <span className="text-success"> {availabilities}</span>
            </h6>
            <h6 className="mt-1">
              Catagories: <span className="text-uppercase">{catagories}</span>
            </h6>
            <h6 className="mt-1">
              Brand: <span className="text-uppercase">{brand}</span>
            </h6>
            <p className="my-3">{details}</p>
            <h2 className="fw-bold">{price} TK</h2>
            <div className="d-flex my-3">
              <button className="px-3 py-1 me-2 update" onClick={decrese}>
                {<FontAwesomeIcon icon={faMinus} />}
              </button>
              <input className="px-2" type="number" value={count} />
              <button className="px-3 py-1 ms-2 update" onClick={increse}>
                {<FontAwesomeIcon icon={faPlus} />}
              </button>
            </div>
            <button onClick={handleOnClick} className="px-5 py-2 order">
              Place an Order
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Product;
