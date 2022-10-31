import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from "react-toastify";
import { useLocation, useNavigate } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

const EditUser = () => {

    const location=useLocation()
    // console.log(location.state.id)


    // for prefilling form data
     const prefill={
            empid:location.state?location.state.empid:"",
            empname:location.state?location.state.empname:"",
            empemail:location.state?location.state.empemail:"",
            emppassword:location.state?location.state.emppassword:"",
            empdesig:location.state?location.state.empdesig:""
     }
     
    //  console.log(prefill);

// for confirm dialog box
const [visible, setVisible] = useState(false);
 
const accept = (data) =>{
        axios.put(`http://localhost:3001/user/${location.state.id}`,data)
        .then(res =>console.log(res.data))
        .catch(err =>console.log(err))
        navigate("/admin/view")
        toast.success("Edited Successfully",{autoClose:2000})
 
}

const reject = () => {
  setVisible(!visible);
};



     const navigate=useNavigate()
    const {register,handleSubmit,formState: { errors }} = useForm({defaultValues:prefill});
   
    const onSubmit = (data) =>{
     
      confirmDialog({
        message: "Are you sure you want to proceed?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept:() =>accept(data),
        reject,
      });
        // console.log(data)
        // axios.put(`http://localhost:3001/user/${location.state.id}`,data)
        // .then(res =>console.log(res.data))
        // .catch(err =>console.log(err))
        // navigate("/admin/view")
        // toast.success("Edited Successfully",{autoClose:2000})
        
    }

  
  return (
    <div className='container d-flex flex-column align-items-center' style={{marginTop:'8%'}}>
        <div className='col-5 text-center'>

        
        <Card sx={{ p: 5,border:"1px solid black" }} style={{boxShadow: "5px 5px 10px #dedede"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Edit</h3>
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

        <div>
        <TextField
          id="standard-required"
          label="EmpDesig"
          variant="outlined"
          className='mt-4 col-10 pb-2'
          name='empdesig'
          {...register("empdesig",{required:true})}
        />
        {errors.empdesig && <p style={{ color: "red", fontSize: 17 }}>designation is required</p>}
        </div>
        <Button variant="contained" className='mt-2 mx-3' type='submit' >Submit</Button>
        <Button variant="contained" className='mt-2' onClick={()=>navigate("/admin/view")}>Cancel</Button>
        </form>
        </Card>
        
        </div>
{/* confirm dialog */}
  <ConfirmDialog />
        
    </div>
  )
}

export default EditUser