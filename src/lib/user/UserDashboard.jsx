import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Books from './Books'
import Header from './Header'
const  UserDashboard = () => {

  let navigate = useNavigate();

  //  let loggedin = JSON.parse(localStorage.getItem('loggenIn'));;

  //  if (!loggedin.isLogged){

  //   navigate("/")
  //  } else {
  //   return null
  //  }

  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default UserDashboard 