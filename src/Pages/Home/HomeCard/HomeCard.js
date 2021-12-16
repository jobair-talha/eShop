import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./HomeCard.css";

const HomeCard = ({ products }) => {
  const { image, rating, _id } = products;

  return (
    <Col className="my-3">
      <Card as={Link} to={`/product/${_id}`}>
        <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
        <Card.Text className="text-center pb-1">
          <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />
        </Card.Text>
      </Card>
    </Col>
  );
};

export default HomeCard;
