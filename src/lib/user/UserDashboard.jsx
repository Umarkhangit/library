import React from 'react'
import { Outlet } from 'react-router-dom'
import Books from './Books'
import Header from './Header'
const  UserDashboard = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default UserDashboard 