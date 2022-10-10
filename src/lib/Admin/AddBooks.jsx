import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const AddBooks = () => {

    const [vals,setVals]=useState({
        isbn:"",
        title:"",
        author:"",
        genre:"",
        desc:"",
        year:"",
        img:""
    })
    const [img,setimg]=useState()
    const handleChange= (e) =>{
        // console.log(e.target.value)
        setVals({...vals,[e.target.name]:e.target.value})

    }
    const handleChange2= (e) =>{
        // console.log(e.target.name)
       setimg(e.target.files[0])
    }
    console.log(img);

    const navigate=useNavigate()
    const handleSubmit= (e)=>{
        // const one=new FormData()
        // one.append("img",img)
        // console.log(img)
        e.preventDefault()
     axios.post("http://localhost:3001/books",vals)
     .then(res=>console.log(res.data))
     .catch(err=>console.log(err))   
     navigate("/admin/allbooks")
     toast.success("Book Added successfully",{autoClose:2000})
    }

    
    // const {register,handleSubmit,formState: { errors },reset} = useForm();
    // const onSubmit=(data) =>{
    //     // console.log(data)
    //     axios.post("http://localhost:3001/books",data)
    //     .then(res=> console.log(res.data))
    //     .catch(err=> console.log(err))        
    //     // reset()
    //     toast.success("Added Successfully")
    // }


  return (
   <div className="container" style={{marginTop:'8%'}}>
    
    <form style={{marginLeft:"7%"}} onSubmit={handleSubmit}>
        <h3 >Add Books</h3>
        <div className="row">
            <TextField label="Book ISBN" variant='outlined' className='col-4' name='isbn' onChange={handleChange}/>
            <TextField label="Title" variant='outlined' className='col-6' style={{marginLeft:"10px"}} name='title' onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField label="Author" variant='outlined' className='col-6 mt-3' name='author' onChange={handleChange}/>
            <TextField label="Genre" variant='outlined' className='col-4 mt-3' style={{marginLeft:"10px"}} name='genre' onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField label="Description" variant='outlined' className='col-10 mt-3' multiline rows={4} name='desc' onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField label="Published Year" variant='outlined' className='col-6 mt-3' name='year' onChange={handleChange}/>
            <input type="file" className='col-6 mt-3' placeholder='hi' name='img' onChange={handleChange2}/>
           
        </div>
        <Button variant="contained" className='mt-2' type="submit" style={{float:"right",marginRight:"45px"}}>Submit</Button>

    </form>
   </div>
  )
}

export default AddBooks