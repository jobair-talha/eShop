import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mighty-crag-65021.herokuapp.com/all-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Price</th>
          <th>Product Key</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>{product.price} TK</td>
            <td>{product._id}</td>
            <td>
              <Link to={`/dashboard/update/${product._id}`}>Update</Link>
            </td>
            <td>
              <Link to={`/dashboard/delete/${product._id}`}>Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
