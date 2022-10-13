import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component';
import Table from 'react-bootstrap/Table';
// import { useSelector } from 'react-redux';

const Available = () => {
   

    const [all,setAll]=useState([])
    const [pen,setPen]=useState([])

    useEffect(() =>{
        axios.get("http://localhost:3001/books")
        .then(res=> {
        setAll(res.data)
    })
    .catch(err =>console.log(err))

    axios.get("http://localhost:3001/borrowed")
    .then(res =>{
        setPen(res.data)
    })
    .catch(err => console.log(err))
},[])

var avail = all.filter(a =>{
    return !pen.find(p =>{
        return a.ISBN == p.books.ISBN
    })
})    

console.log(avail)

const columns=[
    {
        name:"ISBN",
        selector:row =>row.ISBN,
        sortable: true
    },
    {
        name:"Title",
        selector:row =>row.title,
        sortable: true
    },
    {
        name:"Book Cover",
        cell:(row) =><img src={row.imgUrl} style={{width:50}} alt="book cover"/>
    },
]
  return (
    <div className='container pb-5' style={{marginTop:"7%",marginLeft:"22%"}}>

    
    
    <DataTable columns={columns} data={avail} pagination highlightOnHover responsive />
   

  </div>
  )
}

export default Available