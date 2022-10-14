import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useDispatch, useSelector } from 'react-redux';
import { Books } from '../../redux/Action';


const AllBooks = () => {

    const [datas,setDatas]=useState([])
    const [render,setRender]=useState(0)

    // const dispatch=useDispatch()
    useEffect(()=>{
        axios.get("http://localhost:3001/books")
        .then(res=> {
        setDatas(res.data)
        // dispatch(Books(res.data))
        })
        .catch(err=> console.log(err))
    },[render])

    // const data=useSelector(state=>state)
  //  console.log(data);

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

    const columns = [
        {
          name:"Cover",
          cell:(row) =><img src={row.imgUrl} style={{width:50}} alt="book cover"/>
        },
        {
            name: 'Book ISBN',
            selector: row => row.ISBN,
            sortable: true
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
          cell: (row) => <Button variant="outline-primary" onClick={()=>edit(row)}>Edit</Button>,
          button: true,
        },
        {			
          cell: (row) => <Button variant="outline-danger" onClick={()=>del(row.id)}>Delete<DeleteForeverIcon/> </Button>,
          button: true,
        }
    ];
  return (
    <div className='container pb-5' style={{marginTop:"7%"}}>

    <Button variant="primary" className='float-end ' ><NavLink to="/admin/addbooks" className="text-decoration-none text-light "><AddCircleOutlineIcon/> Add Books</NavLink> </Button>
    <br /><br />
    
    <DataTable columns={columns} data={datas} pagination highlightOnHover responsive/>

    </div>
  )
}

export default AllBooks