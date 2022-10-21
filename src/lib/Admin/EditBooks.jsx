import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";
import { useLocation, useNavigate } from 'react-router-dom';

const EditBooks = () => {


    const [img,setImg]=useState()

    const [edited,setEdited]=useState({
        ISBN:"",
        title:"",
        Author:"",
        genre:"",
        desc:"",
        published:""
    })

    const {register,handleSubmit,formState: { errors }} = useForm();

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
            published:location.state?location.state.published:"",        
     }
     setEdited(prefill)
    },[location])
    
    const handleChange=(e) =>{
        setEdited({...edited,[e.target.name]:e.target.value})
        console.log(edited);
    }

    // for img input
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
     
     const onSubmit= () =>{

        let fEdit={
            ISBN:edited.ISBN,
            title:edited.title,
            Auther:edited.Author,
            genre:edited.genre,
            desc:edited.desc,
            published:edited.published,
            imgUrl:img
        }
        
        axios.put(`http://localhost:3001/books/${location.state.id}`,fEdit)
        .then(res =>console.log(res.data))
        .catch(err => console.log(err))
        navigate("/admin/allbooks")
        toast.success("Edited Successfully",{autoClose:2000})
     }


    //  console.log(prefill)
   


  return (
    <div className="container" style={{marginTop:'8%'}}>
    
    <form style={{marginLeft:"7%"}} onSubmit={handleSubmit(onSubmit)}>
        <h3 >Edit Books</h3>
        <div className="row">
            <TextField  variant='outlined' className='col-4' name='ISBN' value={edited.ISBN} 
            {...register("ISBN",{required:true,onChange:handleChange})}/>
            {errors.ISBN && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

            <TextField  variant='outlined' className='col-6' style={{marginLeft:"10px"}} name='title' value={edited.title} 
            {...register("title",{required:true,onChange:handleChange})}/>
            {errors.title && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-6 mt-3' name='Author' value={edited.Author}
             {...register("Author",{required:true,onChange:handleChange})}/>
             {errors.Author && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

            <TextField  variant='outlined' className='col-4 mt-3' style={{marginLeft:"10px"}} name='genre' value={edited.genre}
             {...register("genre",{required:true,onChange:handleChange})}/>
            {errors.genre && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-10 mt-3' multiline rows={4} name='desc' value={edited.desc} 
            {...register("desc",{required:true,onChange:handleChange})}/>
            {errors.desc && <p style={{ color: "red", fontSize: 17 }}>field required</p> }


        </div>
        <div className="row">
            <TextField  variant='outlined' className='col-6 mt-3' name='published' value={edited.published}
            {...register("published",{required:true,onChange:handleChange})}/>
            {errors.published && <p style={{ color: "red", fontSize: 17 }}>field required</p> }


            <input type="file" className='col-6 mt-3' placeholder='hi' name='imgUrl' {...register("imgUrl",{required:true,onChange:handleChange2})}/>        
            {errors.imgUrl && <p style={{ color: "red", fontSize: 17 }}>field required</p> }
           
        </div>
        <Button variant="contained" className='mt-2'  style={{float:"right",marginRight:"45px"}} onClick={() =>navigate("/admin/allbooks")}>Cancel</Button>
        <Button variant="contained" className='mt-2' type="submit" style={{float:"right",marginRight:"45px"}} >Submit</Button>

    </form>
   </div>
  )
}

export default EditBooks