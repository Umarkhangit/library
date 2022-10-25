import React from 'react';
import "./Dashboard.css";
import Books from './Books';
import SidebarFeed from './SidebarFeed';
import Widgets from './Widgets';


function Feed() {


  return (
   <>

   <div id="main__flex">
   <div id="main__left">
    <SidebarFeed/>

   </div>

   <div id="main__center">
    <Books/>


   </div>

   <div id="main__right">
   <Widgets/>

   </div>
   
   </div>
   
   </>
  )
}

export default Feed