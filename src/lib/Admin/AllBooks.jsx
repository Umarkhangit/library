import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const AllBooks = () => {

    const [datas,setDatas]=useState([])
    const [render,setRender]=useState(0)

    useEffect(()=>{
        axios.get("http://localhost:3001/books")
        .then(res=> setDatas(res.data))
        .catch(err=> console.log(err))
    },[render])

    const del=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(res =>{
          console.log(res.data)
          toast.success("deleted successfully")
          setRender(render+1)
        })
        .catch(err =>console.log(err))
       }
      
       //for editing
       const navigate=useNavigate()
       const edit=(row)=>{
        navigate("/admin/editbooks",{state:row})
      
       }
    const columns = [
        {
            name: 'Book ISBN',
            selector: row => row.isbn,
            sortable: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
          name: 'Author',
          selector: row => row.author,
          sortable: true
        },
        {
          name: 'genre',
          selector: row => row.genre,
          sortable: true
        },
        {
            name: 'description',
            selector: row => row.desc,
            sortable: true
        },
        {
            name: 'published',
            selector: row => row.year,
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
    <div className='container' style={{marginTop:"10%"}}>

    <Button variant="primary"><NavLink to="/admin/addbooks" className="text-decoration-none text-light "><AddCircleOutlineIcon/> Add Books</NavLink> </Button>
    <br /><br />
    
    <DataTable columns={columns} data={datas} pagination highlightOnHover responsive/>

    </div>
  )
}

export default AllBooks