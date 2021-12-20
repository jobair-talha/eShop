import React from "react";
import { Link } from "react-router-dom";

const OrderList = ({ order }) => {
  const { _id, name, key, status } = order;

  return (
    <tr>
      <td>{name}</td>
      <td>{key}</td>
      <td>{status}</td>
      <td>
        <Link to={`/dashboard/update-status/${_id}`}>Update Status</Link>
      </td>
    </tr>
  );
};

export default OrderList;
