import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import OrderProduct from "../OrderProduct/OrderProduct";

const OrderProducts = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/user-orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  return (
    <div>
      <Header />
      <Navigation />
      <Container>
        <div className="my-3 text-secondary">
          Your Total Orders: {orders.length}
        </div>
        {orders.map((order) => (
          <OrderProduct order={order} key={order._id} />
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default OrderProducts;
