/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }}
     />
  );
};

export default RequireAuth;
