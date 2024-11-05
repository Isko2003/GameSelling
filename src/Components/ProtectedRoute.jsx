import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return loggedInUser ? children : <Navigate to="/register" />;
};

export default ProtectedRoute;
