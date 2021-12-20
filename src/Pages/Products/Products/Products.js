import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Product from "../Product/Product";

const Products = () => {
  const [product, setProduct] = useState({});
  const key = useParams();
  useEffect(() => {
    fetch(`https://mighty-crag-65021.herokuapp.com/product/${key.key}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [key]);
  return (
    <div>
      <Header />
      <Navigation />
      <Product product={product} />
      <Footer />
    </div>
  );
};

export default Products;
