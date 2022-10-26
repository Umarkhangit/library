import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardImg, Image } from 'react-bootstrap'

const SidebarFeed = () => {

    const [allbooks,setAllbooks]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:3001/books")
        .then(res =>setAllbooks(res.data))
        .catch(err =>console.log(err))
    
        
      },[])


      let trendingBooks = allbooks.filter(a =>{
        
       return (a.isTrending == true)
         
     }
     )    


  return (
    <>
    <div className='d-flex flex-column align-items-center' style={{marginTop : "120px"}}>
    <p className='text-white px-2' style={{fontSize: "20px",fontWeight:"400",borderRadius:"30px",backgroundColor:"#4682B4"}}>Trending books</p>
      <div className='mt-3' >

        {trendingBooks?.map((tb) => {
            return (
                <div className="mb-4">
                <Image src={tb.imgUrl} style={{width:"150px", height:"200px"}}/>
                </div>
            )
        })}
       
    
   
   
    </div>
    </div>
    </>
  )
}

export default SidebarFeed