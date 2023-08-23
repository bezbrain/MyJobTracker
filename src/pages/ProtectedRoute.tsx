import React from "react";
import { getUserId } from "../DBSnapShot";
import { Navigate, NavigateFunction, useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode; // Accept any type of children
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userId = getUserId();
  // const navigate: NavigateFunction = useNavigate();

  if (!userId) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
