import React from "react";

import Logo from "../../../images/Logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ComponentsList = () => {
  const { logout } = useAuth();
  return (
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
              <Link to="/dashboard/orders">
                <FontAwesomeIcon icon={faCompass} /> Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/product-list" className="mb-5 pb-5">
                <FontAwesomeIcon icon={faCartPlus} /> Product List
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
  );
};

export default ComponentsList;
