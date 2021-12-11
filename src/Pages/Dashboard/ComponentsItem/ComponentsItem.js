import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";

const ComponentsItem = () => {
  const { user } = useAuth();
  return (
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
    </div>
  );
};

export default ComponentsItem;
