import React, {  useState } from 'react'
import TextField from '@mui/material/TextField';
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
    
    const {register,handleSubmit,formState: { errors }} = useForm();

    const handleChange= (e) =>{
        console.log(e.target.value)
        setVals({...vals,[e.target.name]:e.target.value})
        
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
    const onSubmit= ()=>{
       
        let fVal={
            ISBN:vals.ISBN,
            title:vals.title,
            Author:vals.Author,
            genre:vals.genre,
            desc:vals.desc,
            published:vals.published,
            imgUrl:img,
            isTrending: false
            
        }
       
            axios.post("http://localhost:3001/books",fVal)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))   
            navigate("/admin/allbooks")
            toast.success("Book Added successfully",{autoClose:2000})
        
     
    }

    
   

  return (
   <div className="container" style={{marginTop:'8%'}}>
    
    <form style={{marginLeft:"5%"}} onSubmit={handleSubmit(onSubmit)}>
        <h3 className='text-center '>Add Books</h3>
       
        <div className="row mt-4">
            <TextField label="Book ISBN" variant='outlined' className='col-4' name='ISBN'  
            {...register("ISBN",{required:true,onChange:handleChange})}/>

            {errors.ISBN && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

            <TextField label="Title" variant='outlined' className='col-6' style={{marginLeft:"10px"}} name='title' 
            {...register("title",{required:true,onChange:handleChange})}/>
            {errors.title && <p style={{ color: "red", fontSize: 17 }}>field required</p> }
        </div>

        <div className="row">
            <TextField label="Author" variant='outlined' className='col-6 mt-3' name='Author' 
            {...register("Author",{required:true,onChange:handleChange})}/>

            {errors.Author && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

            <TextField label="Genre" variant='outlined' className='col-4 mt-3' style={{marginLeft:"10px"}} name='genre'
            {...register("genre",{required:true,onChange:handleChange})}/>

            {errors.genre && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

        </div>

        <div className="row">
            <TextField label="Description" variant='outlined' className='col-10 mt-3' multiline rows={4} name='desc' 
            {...register("desc",{required:true,onChange:handleChange})}/>

            {errors.desc && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

        </div>

        <div className="row">
            <TextField label="Published Year" variant='outlined' className='col-6 mt-3' name='published'
             {...register("published",{required:true,onChange:handleChange})}/>

            {errors.published && <p style={{ color: "red", fontSize: 17 }}>field required</p> }

            <input type="file" className='col-6 mt-3' placeholder='hi' name='imgUrl'
             {...register("imgUrl",{required:true,onChange:handleChange2})}/>     
                
            {errors.imgUrl && <p style={{ color: "red", fontSize: 17 }}>field required</p> }
   
        </div>
        
        <Button variant="contained" className='mt-2' type="submit" style={{float:"right",marginRight:"45px"}}>Submit</Button>
        {/* <img src={img} alt="" srcset="" /> */}

    </form>
   </div>
  )
}

export default AddBooks