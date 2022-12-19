import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { useSelector } from 'react-redux';
// import { fetchAsyncBooks } from '../../redux/BooksSlice';
import { getAllBooks } from "../../redux/BooksSlice";
import "./Books.css";

const FilteredBooks = () => {
  // const [render, setRender] = useState([]);
  const [searched, setSearched] = useState();

  // for redux
  // const dispatch=useDispatch()
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/books")
  //     .then((res) => {
  //       setRender(res.data);
  //       // dispatch(AllBooks(res.data))
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const Allbooks = useSelector(getAllBooks);
  
 

  const defaultProps = Allbooks.length ?  {
    options: Allbooks,
    getOptionLabel: (option) => option.title,
  } : "";

  const handle = (e, newValue) => {
    // setVal(newValue)
    console.log(newValue, "valueeee");
    setSearched(newValue.title);
    navigate("/user/cards", { state: newValue });

   

  
  };
  
 

  const navigate = useNavigate();

  const postBook = () => {
    
  };


  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="controllable-states-demo"
        clearOnEscape 
        value={searched}
     
        onChange={handle}
        renderInput={(params) => (
          <TextField {...params} label="Search Books" variant="standard" />
        )}
        className="mt-2 mx-3"
      />

     
    </div>
  );
};

export default FilteredBooks;
