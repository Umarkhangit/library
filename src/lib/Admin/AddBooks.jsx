import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const AddBooks = () => {

    const [img,setImg]=useState()
    const [vals,setVals]=useState({
        ISBN:"",
        title:"",
        Author:"",
        genre:"",
        desc:"",
        published:"",
        // imgUrl:"https://source.unsplash.com/random",
       

    })
    
    const handleChange= (e) =>{
        
        setVals({...vals,[e.target.name]:e.target.value})
        
    }
    
    
    const handleChange2= (e) =>{
       let img=e.target.files[0]
       let reader=new FileReader()
       console.log(reader);
       
       reader.addEventListener("load",()=>{
        // console.log(reader.result);
        setImg(reader.result)
       })
       reader.readAsDataURL(img)

    }
   console.log(img)

    const navigate=useNavigate()
    const handleSubmit= (e)=>{
       
        e.preventDefault()
        let input={
            ISBN:vals.ISBN,
            title:vals.title,
            Author:vals.Author,
            genre:vals.genre,
            desc:vals.desc,
            published:vals.published,
            imgUrl:img
        }
     axios.post("http://localhost:3001/books",input)
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
            <TextField label="Book ISBN" variant='outlined' className='col-4' name='ISBN' onChange={handleChange}/>
            <TextField label="Title" variant='outlined' className='col-6' style={{marginLeft:"10px"}} name='title' onChange={handleChange}/>
        </div>

        <div className="row">
            <TextField label="Author" variant='outlined' className='col-6 mt-3' name='Author' onChange={handleChange}/>
            <TextField label="Genre" variant='outlined' className='col-4 mt-3' style={{marginLeft:"10px"}} name='genre' onChange={handleChange}/>
        </div>

        <div className="row">
            <TextField label="Description" variant='outlined' className='col-10 mt-3' multiline rows={4} name='desc' onChange={handleChange}/>
        </div>

        <div className="row">
            <TextField label="Published Year" variant='outlined' className='col-6 mt-3' name='published' onChange={handleChange}/>
            <input type="file" className='col-6 mt-3' placeholder='hi' name='imgUrl' onChange={handleChange2}/>           
        </div>
        
        <Button variant="contained" className='mt-2' type="submit" style={{float:"right",marginRight:"45px"}}>Submit</Button>

        {/* <img src={img} alt="" srcset="" /> */}

    </form>
   </div>
  )
}

export default AddBooks