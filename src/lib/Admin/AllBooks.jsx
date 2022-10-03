import React from 'react';
import Button from 'react-bootstrap/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink } from 'react-router-dom';

const AllBooks = () => {
  return (
    <div className='container' style={{marginTop:"10%"}}>

    <Button variant="primary"><NavLink to="/admin/addbooks" className="text-decoration-none text-light"><AddCircleOutlineIcon/> Add Books</NavLink> </Button>
    </div>
  )
}

export default AllBooks