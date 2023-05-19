import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const AuthRequired = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading</h1>;
  } else if (user) {
    return children;
  } else{
    <Navigate></Navigate>
  }
};

export default AuthRequired;
