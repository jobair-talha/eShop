import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import OrderList from "../../OrderList/OrderList";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://mighty-crag-65021.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

  if (orders.length === 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="py-4">
      <Table bordered>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Key</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderList order={order} key={order._id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
