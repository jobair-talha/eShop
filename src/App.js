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
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import ProductList from "./Pages/Dashboard/PorductList/ProductList";
import Update from "./Pages/Dashboard/Update/Update";
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
          ></Route>
          <Route
            path="/dashboard/add-product"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard/make-admin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <AdminRoute>
                <DashboardHome />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard/product-list"
            element={
              <AdminRoute>
                <ProductList />
              </AdminRoute>
            }
          />
          <Route
            path="update/:id"
            element={
              <AdminRoute>
                <Update />
              </AdminRoute>
            }
          />
          <Route
            path="/delete/:id"
            element={
              <PrivateRoute>
                <DeleteProduct />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
