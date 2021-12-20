import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";

const Catagories = () => {
  const [products, setProducts] = useState([]);
  const category = useParams();
  const catagories = category.catagories;
  const url = `https://mighty-crag-65021.herokuapp.com/catagories?catagories=${catagories}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [catagories]);
  return (
    <>
      <Header />
      <Navigation />
      <div className="py-5">
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Catagories;
