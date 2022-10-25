import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  const isAuthenticated = JSON.parse(localStorage.getItem('isLogged'));
//   const isAuth = isAuthenticated.isLogged
  console.log(isAuthenticated);

  return (
    isAuthenticated ?  <Outlet/> : <Navigate to="/"/>
     
  );
}

export default ProtectedRoutes;