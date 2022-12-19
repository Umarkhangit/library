import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import Books from './Books';
import SidebarFeed from './SidebarFeed';
import Widgets from './Widgets';


// import { useDispatch } from "react-redux";
// import { AllBooks } from "../../redux/Action";
// import axios from "axios";
import FilteredBooks from './FilteredBooks';
import { useDispatch } from 'react-redux';
import { fetchAsyncBooks, fetchAsyncBorrow } from '../../redux/BooksSlice';




function Feed() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncBooks());
    dispatch(fetchAsyncBorrow());
  }, [dispatch]);

  
  return (
   <>

   <div id="main__flex" style={{backgroundColor:"white"}}>
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