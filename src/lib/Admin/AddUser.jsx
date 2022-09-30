import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";

const AddUser = () => {


    const {register,handleSubmit,formState: { errors },reset} = useForm();
    const onSubmit=(data) =>{
        console.log(data)
        axios.post("http://localhost:3001/user",data)
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
        <h3>Add New User</h3>
        <div>
        <TextField          
          id="standard-required"
          label="EmpID"
          variant="outlined"
          className='mt-4 col-10'
          name='empid'
          {...register("empid",{required:true})}
        />
        {errors.empid && <p style={{ color: "red", fontSize: 17 }}>Id required</p>}
        </div>

        <div>
        <TextField         
          id="standard-required"
          label="EmpName"
          variant="outlined"
          className='mt-4 col-10'
          name='empname'
          {...register("empname",{required:true})}
        />
        {errors.empname && <p style={{ color: "red", fontSize: 17 }}>name required</p>}
        </div>

        <div>
        <TextField          
          id="standard-required"
          label="EmpEmail"
          variant="outlined"
          className='mt-4 col-10'
          name='empemail'
          {...register("empemail", {
            required: "email is required",
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{3,3}/,
              message: "Invalid Email",
            },
          })}
        />
        {errors.empemail && (
                    <p style={{ color: "red", fontSize: 17 }}>
                      {errors.email.message}
                    </p>
                  )}
        </div>

        <div>
        <TextField
          id="standard-required"
          label="EmpPassword"
          variant="outlined"
          className='mt-4 col-10 pb-2'
          name='emppassword'
          {...register("emppassword",{required:true})}
        />
        {errors.emppassword && <p style={{ color: "red", fontSize: 17 }}>password required</p>}
        </div>
        <Button variant="contained" className='mt-2 w-50' type="submit">Add</Button>
        </form>
        </Card>
        
        </div>

        
    </div>
  )
}

export default AddUser