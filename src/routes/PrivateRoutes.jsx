import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const locations = useLocation();

  if (loading) return <p>loading...</p>;
  if (!user) {
    return <Navigate to="/login" state={locations.pathname} />;
  }
  return children;
};

export default PrivateRoutes;
