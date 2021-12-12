import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import "./App.css";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import LoginRoute from "./Pages/Login/LoginRoute/LoginRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ProductList from "./Pages/Dashboard/PorductList/ProductList";
import UpdateProduct from "./Pages/Dashboard/UpdateProduct/UpdateProduct";
import Orders from "./Pages/Dashboard/Orders/Orders";
import DeleteProduct from "./Pages/Dashboard/DeleteProduct/DeleteProduct";

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
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
