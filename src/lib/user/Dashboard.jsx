import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import Books from './Books';
import SidebarFeed from './SidebarFeed';
import Widgets from './Widgets';
import { useDispatch } from "react-redux";
import { AllBooks } from "../../redux/Action";
import axios from "axios";




function Feed() {
// const [render,setRender]=useState[0]

  // for redux
  // const dispatch=useDispatch()
  // useEffect(()=>{
  //   axios.get("http://localhost:3001/books")
  //   .then(res =>{
  //     // setRender(res.data.length)
  //     // dispatch(AllBooks(res.data))
  //   }) 
  //   .catch(err =>console.log(err))
    
  // })



  return (
   <>

   <div id="main__flex" style={{backgroundColor:"#eee"}}>
   <div id="main__left">
    <SidebarFeed/>

   </div>

   <div id="main__center">
    
    <Books
    />


   </div>

   <div id="main__right">
   <Widgets/>

   </div>
   
   </div>
   
   </>
  )
}

export default Feed