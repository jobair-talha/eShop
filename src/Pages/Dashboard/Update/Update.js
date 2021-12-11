import React from "react";
import ComponentsItem from "../ComponentsItem/ComponentsItem";
import ComponentsList from "../ComponentsList/ComponentsList";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

const Update = () => {
  return (
    <section id="dashboard" className="px-5">
      <div className="main">
        <ComponentsList></ComponentsList>
        <div>
          <ComponentsItem></ComponentsItem>
          <UpdateProduct></UpdateProduct>
        </div>
      </div>
    </section>
  );
};

export default Update;
