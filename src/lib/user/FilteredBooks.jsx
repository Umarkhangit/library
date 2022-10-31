import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import "./Books.css";

const FilteredBooks = () => {
  const [render, setRender] = useState([]);
  const [searched, setSearched] = useState();

  // for redux
  // const dispatch=useDispatch()
  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => {
        setRender(res.data);
        // dispatch(AllBooks(res.data))
      })
      .catch((err) => console.log(err));
  }, []);

  const defaultProps = {
    options: render,
    getOptionLabel: (option) => option.title,
  };

  const handle = (newValue) => {
    // setVal(newValue)
    console.log(newValue.title);
    setSearched(newValue.title);
  };
  console.log(searched);
  
  let s = render.find((r) => {
    return r.title == searched;
  });

  const navigate = useNavigate();

  const postBook = () => {
    console.log(s);
    navigate("/user/cards", { state: s });
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

      {s ? (
        <div className="filterbooks-card text-center mx-5" onClick={postBook}>
          <div
            className="filterbooks-card-image"
            style={{
              backgroundImage: `url(${s?.imgUrl})`,
            }}
          ></div>
          <p className="filterbooks-card-title text-black">{s?.title}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilteredBooks;
