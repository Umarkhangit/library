import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import Books from './Books';
import SidebarFeed from './SidebarFeed';
import Widgets from './Widgets';


// import { useDispatch } from "react-redux";
// import { AllBooks } from "../../redux/Action";
import axios from "axios";
import FilteredBooks from './FilteredBooks';




function Feed() {
// const [render,setRender]=useState([])
// const [searched,setSearched]=useState()

//   // for redux
//   // const dispatch=useDispatch()
//   useEffect(()=>{
//     axios.get("http://localhost:3001/books")
//     .then(res =>{
//       setRender(res.data)
//       // dispatch(AllBooks(res.data))
//     }) 
//     .catch(err =>console.log(err))
    
//   },[])

  
  return (
   <>

   <div id="main__flex" style={{backgroundColor:"#eee"}}>
   <div id="main__left">
    <SidebarFeed/>

   </div>

   <div id="main__center">
    
    <Books/>


   </div>

   <div id="main__right">
    {/* search filter */}
    <FilteredBooks/>

   <Widgets />

   </div>
   
   </div>
   
   </>
  )
}

export default Feed