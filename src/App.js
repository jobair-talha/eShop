import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import "./App.css";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import LoginRoute from "./Pages/Login/LoginRoute/LoginRoute";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ProductList from "./Pages/Dashboard/PorductList/ProductList";
import UpdateProduct from "./Pages/Dashboard/UpdateProduct/UpdateProduct";
import Orders from "./Pages/Dashboard/Orders/Orders";
import DeleteProduct from "./Pages/Dashboard/DeleteProduct/DeleteProduct";
import Products from "./Pages/Products/Products/Products";
import AllProduct from "./Pages/Products/AllProduct/AllProduct";
import Catagories from "./Pages/Products/Catagories/Catagories";
import DesktopGaming from "./Pages/Products/DesktopGaming/DesktopGaming";
import SearchProducts from "./Pages/Products/SearchProducts/SearchProducts";
import OrderProducts from "./Pages/Products/OrderProducts/OrderProducts";
import UpdateStatus from "./Pages/Products/UpdateStatus/UpdateStatus";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/register"
            element={
              <LoginRoute>
                <Register />
              </LoginRoute>
            }
          />
          <Route
            path="/login"
            element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="orders" element={<Orders />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="update" element={<UpdateProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path="delete/:key" element={<DeleteProduct />} />
            <Route path="update-status/:orderId" element={<UpdateStatus />} />
          </Route>
          <Route path="product/:key" element={<Products />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/catagories/:catagories" element={<Catagories />} />
          <Route path="/desktops/:type" element={<DesktopGaming />} />
          <Route path="/search/:name" element={<SearchProducts />} />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <OrderProducts />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
