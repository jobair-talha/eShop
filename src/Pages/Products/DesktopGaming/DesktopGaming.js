import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";

const DesktopGaming = () => {
  const [products, setProducts] = useState([]);
  const url = `https://mighty-crag-65021.herokuapp.com/equipment?catagories=desktop&&type=gaming%20desktop`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

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

export default DesktopGaming;
