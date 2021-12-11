import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import UpdateImg from "../../../images/Update/update.png";

const UpdateForm = () => {
  return (
    <Container>
      <Row xs={1} sm={1} md={1} lg={2} className="py-5">
        <Col>
          <img className="w-100" src={UpdateImg} alt="update" />
        </Col>
        <Col>
          <UpdateProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateForm;
