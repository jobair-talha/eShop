import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const LoginRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user.email) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default LoginRoute;
