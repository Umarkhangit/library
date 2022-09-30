import React from 'react'
import SideNav from './Sidenav' 
import {  Outlet } from "react-router-dom";
import AddUser from './AddUser';
import Dashboard from './Dashboard';

const Admin = () => {
  return (
    <div>

      <SideNav/>
      <Outlet/>
      
    </div>
  )
}

export default Admin