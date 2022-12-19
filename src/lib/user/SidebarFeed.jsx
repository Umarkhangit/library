import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, CardImg, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/BooksSlice'

const SidebarFeed = () => {

    // const [allbooks,setAllbooks]=useState([])

    const Allbooks = useSelector(getAllBooks)


    // useEffect(()=>{
    //     axios.get("http://localhost:3001/books")
    //     .then(res =>setAllbooks(res.data))
    //     .catch(err =>console.log(err))
    
        
    //   },[])


      let trendingBooks = Allbooks.length ? Allbooks.filter(a =>{
        
       return (a.isTrending == true)
         
     }
     )    : ""


  return (
    <>
    <div className='d-flex  flex-column align-items-center ' style={{marginTop : "30px", fontFamily: 'Source Serif Pro'}}>
    <p className='fs-5 bg-gradient bg-opacity-10 mb-4 text-dark ' style={{padding : "10px 50px", fontWeight :500}}>Trending Books</p>
     <div className='square border' style={{padding: "20px 40px", backgroundColor:"#FAF9F9"}}>

      <div className='mt-3 ' >

        { Allbooks.length ?  trendingBooks.map((tb) => {
          return (
                <div className="mb-4" style={{boxShadow: " -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)"}}>
                <Image src={tb.imgUrl} style={{width:"150px", height:"200px"}}/>
                </div>
            )
          }) : <div><h4>Loading. . . .</h4></div>}
       
    
   
   
          </div>
    </div>
    </div>
    </>
  )
}

export default SidebarFeed