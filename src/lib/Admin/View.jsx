import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DataTable from 'react-data-table-component'
import "../Login.css";
import Button from 'react-bootstrap/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const View = () => {

  const [datas,setDatas]=useState([])
  const [render,setRender]=useState(false)

  useEffect(()=>{
    axios.get("http://localhost:3001/user")
    .then(res=> setDatas(res.data))
    .catch(err =>console.log(err))
   
  },[render])
  console.log(datas);

  //for deleting
 const del=(id)=>{
  console.log(id)
  axios.delete(`http://localhost:3001/user/${id}`)
  .then(res =>{
    console.log(res.data)
    toast.success("deleted successfully")
  })
  .catch(err =>console.log(err))
  setRender(true)
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
        name: 'Emp Name',
        selector: row => row.empname,
        sortable: true
    },
    {
      name: 'Emp Email',
      selector: row => row.empemail,
      sortable: true
    },
    {
      name: 'Emp Password',
      selector: row => row.emppassword,
      sortable: true
    },
    {			
      cell: (row) => <Button variant="outline-primary" onClick={()=>edit(row)}>Edit</Button>,
      button: true,
    },
    {			
      cell: (row) => <Button variant="outline-danger" onClick={()=>del(row.id)}>Delete<DeleteForeverIcon/> </Button>,
      button: true,
    }
];




  return (
    <div className='container' style={{marginTop:"10%",fontSize:"20px"}}  >

    <h2 className='text-center mb-4'>Users</h2>
      <DataTable columns={columns} data={datas} pagination highlightOnHover responsive/>
    
    </div>
  )
}

export default View