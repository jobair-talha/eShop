import React from "react";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

const HomeCard = ({ products }) => {
  const { image, rating } = products;

  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
        <Card.Text>
          {[...Array(4).keys()].map((rat) => (
            <FontAwesomeIcon icon={faStar} />
          ))}
          {[...Array(1).keys()].map((hr) => (
            <FontAwesomeIcon icon={faStarHalf} />
          ))}
        </Card.Text>
      </Card>
    </Col>
  );
};

export default HomeCard;
