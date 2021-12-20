import React from "react";
import { useNavigate } from "react-router-dom";

const OrderProduct = ({ order }) => {
  const { name, key, status, quantity } = order;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${key}`);
  };

  return (
    <div className="shadow-sm py-2 px-3 my-4 d-flex justify-content-between align-items-center flex-wrap">
      <div className="cursor text-success" onClick={handleClick}>
        {name}
      </div>
      <div>Key: {key}</div>
      <div className="text-secondary">{status}</div>
      <div>Quantity: {quantity}</div>
    </div>
  );
};

export default OrderProduct;
