import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Pending = () => {

    const [borrow,setBorrowed]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>setBorrowed(res.data))
        .catch(err => console.log(err))
    },[])

    console.log(borrow.flatMap(val =>val.books));

    const columns=[
        {
            name:"EmpId",
            selector:row =>row.empid,
            sortable: true
        },
        {
            name:"EmpName",
            selector:row =>row.empname,
            sortable: true
        },
        {
            name:"Book ISBN",
            selector:row =>row.books.map(val => val.isbn),
            sortable: true
        },
        {
            name:"Book Title",
            selector:row =>row.books.map(val =>val.title),
            sortable: true
        }
    ]
  return (
    <div className='container' style={{marginTop:"10%"}}>

    
      <h1 style={{fontFamily:" calibri",fontWeight:"bold"}}>Pending</h1>
    <DataTable columns={columns} data={borrow} pagination highlightOnHover responsive/>

    </div>
  )
}

export default Pending