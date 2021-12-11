import React from "react";
import ComponentsItem from "../ComponentsItem/ComponentsItem";
import ComponentsList from "../ComponentsList/ComponentsList";
import DeleteItem from "../DeleteItem/DeleteItem";

const DeleteProduct = () => {
  return (
    <section id="dashboard" className="px-5">
      <div className="main">
        <ComponentsList></ComponentsList>
        <div>
          <ComponentsItem></ComponentsItem>
          <DeleteItem></DeleteItem>
        </div>
      </div>
    </section>
  );
};

export default DeleteProduct;
