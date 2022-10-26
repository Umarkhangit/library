import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Card, CardImg, Image } from 'react-bootstrap'

// import './ButtonDemo.css';

const Widgets = () => {

    const [allbooks,setAllbooks]=useState([])
    const [recent, setRecent] = useState()


    useEffect(()=>{
        axios.get("http://localhost:3001/books")
        .then(res =>setAllbooks(res.data))
        .catch(err =>console.log(err))
        RecentBooks()
           
        
      },[allbooks.length])


    //   let trendingBooks = allbooks.filter(a =>{
        
    //    return (a.isTrending == true)
         
    //  }
    //  )    
     
     const RecentBooks = () => {
        let BLen = allbooks.length - 1
        
        let due = [];
        for (let i = 0; i <= 2; i++) {
           due.push(allbooks[BLen])
            BLen--

            
        }
        setRecent(due) 
        
        console.log(recent)
        
     }


     


  return (
    <>
    <div className='d-flex flex-column align-items-center' style={{marginTop : "120px"}}>
    <p className='text-white px-2' style={{fontSize: "20px",fontWeight:"400",borderRadius:"30px",backgroundColor:"#4682B4"}}>Recently Added</p>

      <div className='mt-3' >

        { recent?.map((tb) => {
            return (
                <div className="mb-4">
                <Image src={tb?.imgUrl} style={{width:"150px", height:"200px"}}/>
                </div>
            )
        })
    }
    
   
   
    </div>
    </div>
    </>
  )
}

export default Widgets