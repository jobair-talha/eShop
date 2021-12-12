import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../../Shared/Title/Title";
import HomeCard from "../HomeCard/HomeCard";

const titleName = "Feature Products";
const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <section className="py-5">
      <Container>
        <Title titleName={titleName}></Title>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((product) => (
            <HomeCard products={product} key={product._id}></HomeCard>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeProducts;
