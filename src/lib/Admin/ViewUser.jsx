import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component'
import "../Login.css";
import Button from 'react-bootstrap/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';


const ViewUser = () => {

  const [users,setUsers]=useState([])
  const [render,setRender]=useState(0)

  useEffect(()=>{
    axios.get("http://localhost:3001/user")
    .then(res=> {
      setUsers(res.data)
      
    })
    .catch(err =>console.log(err))
   
  },[render])
  // console.log(users);

 


  //for deleting
 const del=(id)=>{
  console.log(id)
  axios.delete(`http://localhost:3001/user/${id}`)
  .then(res =>{
    console.log(res.data)
    toast.success("Deleted",{autoClose:2000})
  })
  .catch(err =>console.log(err))
  setRender(render+1)
 }

 //for editing
 const navigate=useNavigate()
 const edit=(row)=>{
  navigate("/admin/edit",{state:row})

 }


 
  // react table data comp
  const columns = [
    {
        name: 'Emp Id',
        selector: row => row.empid,
        sortable: true
    },
    {
        name: 'Name',
        selector: row => row.empname,
        sortable: true
    },
    {
      name: 'Email',
      selector: row => row.empemail,
      sortable: true
    },
    {
      name: 'Password',
      selector: row => row.emppassword,
      sortable: true
    },
    {
      name: 'Designation',
      selector: row => row.empdesig,
      sortable: true
    },
    {			
      cell: (row) => <Button variant="outline-primary" onClick={()=>edit(row)}><EditIcon/></Button>,
      button: true,
    },
    {			
      cell: (row) => <Button variant="outline-danger" onClick={()=>del(row.id)}><DeleteForeverIcon/> </Button>,
      button: true,
    }
];




  return (
    <div className='container pb-5' style={{marginTop:"10%",fontSize:"20px"}}  >

    <h1 className='text-center mb-4'>Users</h1>
      <DataTable columns={columns} data={users} pagination highlightOnHover responsive/>
    
 
    </div>
  )
}

export default ViewUser