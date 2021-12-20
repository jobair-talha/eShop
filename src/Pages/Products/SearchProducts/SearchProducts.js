import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";

const SearchProducts = () => {
  const [displayProducts, setDisplayProducts] = useState([]);
  const searchText = useParams();

  useEffect(() => {
    fetch(
      `https://mighty-crag-65021.herokuapp.com/search?name=${searchText.name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data);
      });
  }, [searchText.name]);

  return (
    <div>
      <Header />
      <Navigation />
      <div className="my-5">
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {displayProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </Row>
          {!displayProducts.length && (
            <div className="my-5 text-center">
              <h1>Product is Coming Soon...</h1>
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SearchProducts;
