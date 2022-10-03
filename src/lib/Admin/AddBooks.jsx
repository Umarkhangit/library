import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";

const AddBooks = () => {


    const {register,handleSubmit,formState: { errors },reset} = useForm();
    const onSubmit=(data) =>{
        // console.log(data)
        axios.post("",)
        .then(res=> console.log(res.data))
        .catch(err=> console.log(err))        
        reset()
        toast.success("Added Successfully")
    }


  return (
    <div className='container d-flex flex-column align-items-center' style={{marginTop:'8%'}}>
        <div className='col-5 text-center'>

        
        <Card sx={{ p: 5,border:"1px solid black" }} style={{boxShadow: "5px 5px 10px #dedede"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Add New Books</h3>
        <div>
        <TextField          
          id="standard-required"
          label="Book ISBN"
          variant="outlined"
          className='mt-4 col-10'
          name='bisbn'
          {...register("bisbn",{required:true})}
        />
        {errors.bisbn && <p style={{ color: "red", fontSize: 17 }}>Field Required</p>}
        </div>

        <div>
        <TextField         
          id="standard-required"
          label="Title"
          variant="outlined"
          className='mt-4 col-10'
          name='btitle'
          {...register("btitle",{required:true})}
        />
        {errors.btitle && <p style={{ color: "red", fontSize: 17 }}>Field Required</p>}
        </div>

        <div>
        <TextField          
          id="standard-required"
          label="Author"
          variant="outlined"
          className='mt-4 col-10'
          name='bauthor'
          {...register("bauthor", {required: true })}
        />
        {errors.bauthor && (<p style={{ color: "red", fontSize: 17 }}>Field Required </p> )}
        </div>

        <div>
        <TextField
          id="standard-required"
          label="Description"
          variant="outlined"
          className='mt-4 col-10 pb-2'
          name='bdescription'
          {...register("bdescription",{required:true})}
        />
        {errors.bdescription && <p style={{ color: "red", fontSize: 17 }}>Field Required</p>}
        </div>
        <Button variant="contained" className='mt-2 w-50' type="submit">Add</Button>
        </form>
        </Card>
        
        </div>

        
    </div>
  )
}

export default AddBooks