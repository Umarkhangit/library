import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";
import { useLocation, useNavigate } from 'react-router-dom';

const EditBooks = () => {

    const [edited,setEdited]=useState({
        isbn:"",
        title:"",
        author:"",
        genre:"",
        desc:"",
        year:""
    })
    const location=useLocation()
    console.log(location.state.id)


    // for prefilling form data
    useEffect(()=>{
        const prefill={
            isbn:location.state?location.state.isbn:"",
            title:location.state?location.state.title:"",
            author:location.state?location.state.author:"",
            genre:location.state?location.state.genre:"",
            desc:location.state?location.state.desc:"",
            year:location.state?location.state.year:""
        
     }
     setEdited(prefill)
    },[location])
    
    const handleChange=(e) =>{
        setEdited({...edited,[e.target.name]:e.target.value})
        console.log(edited);
    }

     const navigate=useNavigate()
     const handleSubmit= (e) =>{
        axios.put(`http://localhost:3001/books/${location.state.id}`,edited)
        .then(res =>console.log(res.data))
        .catch(err => console.log(err))
        navigate("/admin/allbooks")
        toast.success("Edited Successfully")
     }

     
    //  console.log(prefill)
    // const {register,handleSubmit,formState: { errors }} = useForm({defaultValues:prefill});
    // const onSubmit=(data) =>{
    //     console.log(data)
    //     axios.put(`http://localhost:3001/books/${location.state.id}`,data)
    //     .then(res =>console.log(res.data))
    //     .catch(err =>console.log(err))
    //     navigate("/admin/view")
    //     toast.success("Edited Successfully")
        
    // }


  return (
    <div className="container" style={{marginTop:'8%'}}>
    
    <form style={{marginLeft:"7%"}} onSubmit={handleSubmit}>
        <h3 >Edit Books</h3>
        <div className="row">
            <TextField  variant='outlined' className='col-4' name='isbn' value={edited.isbn} onChange={handleChange}/>
            <TextField  variant='outlined' className='col-6' style={{marginLeft:"10px"}} name='title' value={edited.title} onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-6 mt-3' name='author' value={edited.author} onChange={handleChange}/>
            <TextField  variant='outlined' className='col-4 mt-3' style={{marginLeft:"10px"}} name='genre' value={edited.genre} onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-10 mt-3' multiline rows={4} name='desc' value={edited.desc} onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-6 mt-3' name='year' value={edited.year} onChange={handleChange}/>
            <input type="file" className='col-6 mt-3' placeholder='hi' name='img' />
           
        </div>
        <Button variant="contained" className='mt-2'  style={{float:"right",marginRight:"45px"}} onClick={() =>navigate("/admin/allbooks")}>Cancel</Button>
        <Button variant="contained" className='mt-2' type="submit" style={{float:"right",marginRight:"45px"}} >Submit</Button>

    </form>
   </div>
  )
}

export default EditBooks