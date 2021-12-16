import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, image, _id } = product;
  return (
    <Col className="my-3">
      <Card as={Link} to={`/product/${_id}`}>
        <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
