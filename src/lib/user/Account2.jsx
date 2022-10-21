import axios from 'axios'
import React,{useState,useEffect} from 'react'

const Account2 = () => {

    const [borrowed,setBorrowed]=useState([])

    let localId = JSON.parse(localStorage.getItem('loginId'));

    let empid = localId.empid;
    console.log(empid);

    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res => {
            let filtered=res.data.filter(val =>val.empid == empid)
            console.log(filtered);
            setBorrowed(filtered)
        })
        .catch(err =>console.log(err))
    },[])

    // console.log(borrowed)

    let penalty = borrowed.filter(val =>{
        return val.books.isPenalty == true
    })

    console.log(penalty);
    
   

  return (
    <div></div>
  )
}

export default Account2