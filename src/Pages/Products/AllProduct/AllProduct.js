import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import ProductPagination from "../ProductPagination/ProductPagination";

const AllProduct = () => {
  const [page, setPage] = useState(0);
  const size = 16;
  const url = `https://mighty-crag-65021.herokuapp.com/products?page=${page}&&size=${size}`;
  return (
    <div>
      <Header />
      <Navigation />
      <div className="py-5">
        <Container>
          <ProductPagination
            url={url}
            setPage={setPage}
            page={page}
            size={size}
          />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;
