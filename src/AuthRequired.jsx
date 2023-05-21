import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AuthRequired = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  
  if (loading) {
    return <progress className="progress progress-primary w-56" value="70" max="100"></progress>;
  } else if (user) {
    return children;
  } else {
    return <Navigate state={{from: location}} replace={true} to="/login"></Navigate>;
  }
};

export default AuthRequired;
