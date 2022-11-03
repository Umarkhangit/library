import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
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