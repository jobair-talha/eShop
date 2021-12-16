import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductPagination.css";

const ProductPagination = ({ url, page, setPage, size }) => {
  const [pageCount, setPageCount] = useState(0);
  const [displayProducts, setDisplayProducts] = useState([]);
  console.log(displayProducts);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <div className="all-products">
      <Row xs={1} sm={2} md={3} lg={4}>
        {displayProducts.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </Row>
      <div className="pagination-btn">
        <ButtonGroup className="me-2 mt-3" aria-label="First group">
          <Button onClick={() => setPage(page - 1)} variant="danger">
            Previous
          </Button>
          {[...Array(pageCount).keys()].map((number) => (
            <Button
              variant="danger"
              key={number}
              className={number === page ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </Button>
          ))}
          <Button onClick={() => setPage(page + 1)} variant="danger">
            Next
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ProductPagination;
