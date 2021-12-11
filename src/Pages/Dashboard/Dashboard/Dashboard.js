import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../../images/Logo/logo.png";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <section id="dashboard" className="px-5">
      <div className="main">
        <div className="component-list pb-5">
          <ul>
            <li className="logo-bg text-center p-3">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </li>
            <li>
              <ul className="ps-3">
                <li>
                  <Link to="/dashboard">
                    <FontAwesomeIcon icon={faHome} /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product/">
                    <FontAwesomeIcon icon={faPlusCircle} /> Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/make-admin">
                    <FontAwesomeIcon icon={faUserCog} /> Make Admin
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/update/:id">
                    <FontAwesomeIcon icon={faPen} /> Update Products
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/orders">
                    <FontAwesomeIcon icon={faCompass} /> Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/product-list">
                    <FontAwesomeIcon icon={faCartPlus} /> Product List
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/delete/:id" className="mb-5 pb-5">
                    <FontAwesomeIcon icon={faTrash} /> Delete Product
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button
            onClick={logout}
            className="btn bg-light text-center px-5 mx-auto"
          >
            Logout
          </button>
        </div>

        <div className="component-item">
          <div className="border p-2 mt-2 mb-4">
            <div className="dash-header d-flex justify-content-between align-items-center">
              <div className="left">
                <h4>Dashboard Overview</h4>
              </div>
              <div className="right">
                <FontAwesomeIcon icon={faBell} />
                <img src={user.photoURL} alt="profilePic" />
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
