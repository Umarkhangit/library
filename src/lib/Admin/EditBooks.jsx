import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";
import { useLocation, useNavigate } from 'react-router-dom';

const EditBooks = () => {

    const [render,setRender]=useState(false);

    const [edited,setEdited]=useState({
        ISBN:"",
        title:"",
        Author:"",
        genre:"",
        desc:"",
        published:""
    })
    const location=useLocation()
    // console.log(location.state.id)


    // for prefilling form data
    useEffect(()=>{
        const prefill={
            ISBN:location.state?location.state.ISBN:"",
            title:location.state?location.state.title:"",
            Author:location.state?location.state.Author:"",
            genre:location.state?location.state.genre:"",
            desc:location.state?location.state.desc:"",
            published:location.state?location.state.published:""
        
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
        toast.success("Edited Successfully",{autoClose:2000})
        setRender(true);
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
            <TextField  variant='outlined' className='col-4' name='ISBN' value={edited.ISBN} onChange={handleChange}/>
            <TextField  variant='outlined' className='col-6' style={{marginLeft:"10px"}} name='title' value={edited.title} onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-6 mt-3' name='Author' value={edited.Author} onChange={handleChange}/>
            <TextField  variant='outlined' className='col-4 mt-3' style={{marginLeft:"10px"}} name='genre' value={edited.genre} onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-10 mt-3' multiline rows={4} name='desc' value={edited.desc} onChange={handleChange}/>
        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-6 mt-3' name='published' value={edited.published} onChange={handleChange}/>
            {/* <input type="file" className='col-6 mt-3' placeholder='hi' name='img' /> */}
           
        </div>
        <Button variant="contained" className='mt-2'  style={{float:"right",marginRight:"45px"}} onClick={() =>navigate("/admin/allbooks")}>Cancel</Button>
        <Button variant="contained" className='mt-2' type="submit" style={{float:"right",marginRight:"45px"}} >Submit</Button>

    </form>
   </div>
  )
}

export default EditBooks