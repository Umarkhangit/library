import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component';
import Table from 'react-bootstrap/Table';

const Available = () => {
    const [borrowed,setBorrowed]=useState([])
    const [books,setBooks]=useState([])
   

    useEffect(() =>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>setBorrowed(res.data))
        .catch(err =>console.log(err))

        axios.get("http://localhost:3001/books")
        .then(res =>setBooks(res.data))
        .catch(err =>console.log(err))
    },[])
    
var avail=""
 books.map(book =>{
    borrowed.map(borr =>{
        if(book.isbn != borr.books[0].isbn){
            console.log(book)
          avail=book
        }
    })
 })
   console.log("avail",avail)

  
  return (
    <div  style={{marginTop:"10%",marginLeft:"15%"}}>

    
    {/* <h1 style={{fontFamily:" calibri",fontWeight:"bold"}}>Pending</h1> */}
    <Table style={{width:"40%"}}>
        <thead>
            <tr>
                <td>Book ISBN</td>
                <td>Title</td>
            </tr>
        </thead>
    </Table>

  </div>
  )
}

export default Available