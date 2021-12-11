import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ComponentsItem from "../ComponentsItem/ComponentsItem";
import ComponentsList from "../ComponentsList/ComponentsList";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/all-products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <section id="dashboard" className="px-5">
      <div className="main">
        <ComponentsList></ComponentsList>
        <div>
          <ComponentsItem></ComponentsItem>
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
                    <Link to={`/update/${product._id}`}>Update</Link>
                  </td>
                  <td>
                    <Link to={`/delete/${product._id}`}>Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
