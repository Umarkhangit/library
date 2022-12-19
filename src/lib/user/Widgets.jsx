import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Badge, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/BooksSlice'

// import './ButtonDemo.css';

const Widgets = () => {

    // const [allbooks,setAllbooks]=useState([])d
    const [recent, setRecent] = useState()
    const Allbooks = useSelector(getAllBooks);

    useEffect(()=>{
       
        RecentBooks()
           
        
      },[Allbooks.length])


   
     const RecentBooks = () => {
        let BLen = Allbooks.length - 1
        
        let due = [];
        for (let i = 0; i <= 2; i++) {
           due.push(Allbooks[BLen])
            BLen--

            
        }
        setRecent(due) 
        
        console.log(recent)
        
     }


     


  return (
    <>
    <div className='d-flex flex-column align-items-center' style={{marginTop : "45px",fontFamily: 'Source Serif Pro'}}>
    {/* <p className='text-white px-2' style={{fontSize: "20px",fontWeight:"400",borderRadius:"30px",backgroundColor:"#4682B4"}}>Recently Added</p> */}
    <p className='fs-5 mb-4 bg-gradient bg-opacity-10 text-dark' style={{padding : "10px 50px", fontWeight :500}}>Recently Added</p>
    <div className='square border' style={{padding: "20px 40px", backgroundColor:"#FAF9F9"}}>
      <div className='mt-3' >

        { recent?.map((tb) => {
            return (
                <div className="mb-4" style={{boxShadow: " -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)"}}>
                <Image src={tb?.imgUrl} style={{width:"150px", height:"200px"}}/>
                </div>
            )
        })
    }
    
   
    </div>
    </div>
    </div>
    </>
  )
}

export default Widgets