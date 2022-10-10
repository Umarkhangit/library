import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Available = () => {
    const [borrowed,setBorrowed]=useState([])
    const [books,setBooks]=useState([])
    useEffect(() =>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>setBorrowed(res.data))
        .catch(err =>console.log(err))

        axios.get("http://localhost:3001/books")
        .then(res =>setBooks(res.data))
        .catch(err =>console.log(err))
    },[])
    console.log(borrowed)
    console.log(books);

   
  return (
    <div>Available</div>
  )
}

export default Available