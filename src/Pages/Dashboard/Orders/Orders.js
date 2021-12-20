import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import OrderList from "../../OrderList/OrderList";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

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
