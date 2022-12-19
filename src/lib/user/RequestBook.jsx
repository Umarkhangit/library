import React, { useState } from 'react'
import int from '../../webb.png';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { toast } from 'react-toastify';


const RequestBook = () => {

    const getEmp = JSON.parse(localStorage.getItem("loginId"))

    const [open, setOpen] = useState(false);
    const [requests, setRequests] = useState({
        empId : Number(getEmp.empid),
        requestBook : null
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    setOpen(false);
  };


  console.log(getEmp)

  const handleRequest = () => {

console.log(requests)
    axios.post('http://localhost:3001/Requests',requests).then((res) => console.log(res)).catch((err)=> console.log(err))

    
    setOpen(false)
    toast.info('Request Made Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT
    });

  }

  const handleChange = (e) =>  {
    setRequests({ ...requests, requestBook : e.target.value})
  }

    
  return (
   
    <div className='d-flex text-center justify-content-center my-5 card' style={{backgroundImage: `url(${int})`}} >
      
        <div className='my-5 '>
            <div >
            <h3 className='text-dark' style={{fontFamily:"Source Serif Pro"}}> Didn't find your desired book?  </h3>
            {/* <h6 style={{fontWeight: 400}}> We will arrange it for you!</h6> */}
            <Button variant="contained" onClick={handleClickOpen}>
Request Book      </Button>
            </div>
           
        </div>
        
       
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To request a book from us, please enter book name or book ISBN. We
            keep updating our shelves.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Book Name/Book ISBN"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRequest}>Request</Button>
        </DialogActions>
      </Dialog>
    </div>
  
    
  )
}

export default RequestBook