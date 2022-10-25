import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = JSON.parse(localStorage.getItem('loginId'));
//   const isAuth = isAuthenticated.isLogged
  

  return (
    isAuthenticated ?  <Outlet/> : <Navigate to="/"/>
     
  );
}

export default ProtectedRoute;