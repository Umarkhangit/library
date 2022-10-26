import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
// import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';

const AllBooks = () => {

    const [books,setBooks]=useState([])
    const [render,setRender]=useState(0)
  const [trending,setTrending]=useState(true)

    // const dispatch=useDispatch()
    useEffect(()=>{
        axios.get("http://localhost:3001/books")
        .then(res=> {
          setBooks(res.data)
        // dispatch(Books(res.data))
        })
        .catch(err=> console.log(err))
    },[render])

    // const data=useSelector(state=>state)
  //  console.log(data);

  // for deleting
    const del=(id)=>{
        // console.log(id)
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(res =>{
          console.log(res.data)
          toast.success("Deleted ",{autoClose:2000})
          setRender(render+1)
        })
        .catch(err =>console.log(err))
       }
      
       //for editing
       const navigate=useNavigate()
       const edit=(row)=>{
        navigate("/admin/editbooks",{state:row})
      
       }

       const check = (row) =>{
        // console.log(row);
        setTrending(!trending)
        var addB={
          ...row,isTrending:trending
        }
        axios.put(`http://localhost:3001/books/${row.id}`,addB)
        .then(res =>console.log(res.data)).catch(err =>console.log(err))
        // console.log(addB);
       }

    const columns = [
        {
          name:"Cover",
          cell:(row) =><img src={row.imgUrl} style={{width:50}} alt="book cover"/>
        },
        {
            name: 'Book ISBN',
            selector: row => row.ISBN,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
          name: 'Author',
          selector: row => row.Author,
          sortable: true
        },
        {
          name: 'Genre',
          selector: row => row.genre,
          sortable: true
        },
        {
            name: 'Description',
            selector: row => row.desc,
            sortable: true
        },
        {
            name: 'Published',
            selector: row => row.published,
            sortable: true
        },
        {
          name: 'Trending',
          cell :(row) =>  <Checkbox onClick={()=> check(row)}/>
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

    const customStyles={
      rows: {
        style: {
            // minHeight: '75px',
            minWidth:"70px" // override the row height
        },
    }
  }
  return (
    <div className='container pb-5' style={{marginTop:"7%",marginLeft:"7%"}}>

    <Button variant="primary" className='float-end ' ><NavLink to="/admin/addbooks" className="text-decoration-none text-light "><AddCircleOutlineIcon/> Add Books</NavLink> </Button>
    <br /><br />
    
    <DataTable columns={columns} data={books} pagination highlightOnHover responsive customStyles={customStyles} />

    </div>
  )
}

export default AllBooks