import React, { useEffect } from "react";
import "./Books.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";





const Books = () => {
  

  

  // useEffect(() => {
  //   axios
  //     .get("https://google-books.p.rapidapi.com/volumes")
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }, []);
  // console.log(Post);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const navigate = useNavigate();

  const postBook = (data) => {

    navigate("/user/cards", {state: data});
  };

  const [allbooks,setAllbooks]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/books")
    .then(res =>setAllbooks(res.data))
    .catch(err =>console.log(err))
  },[])
  console.log(allbooks)

  return (
    <>
      <div className="text-center pb-2">
        <h2>BOOKS</h2>
      </div>
      <div id="main-slider-container" className="container">
        <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        />
        <div id="slider">
          {allbooks.map((slide, index) => {
            return (
              <div
                className="slider-card text-center"
                key={index}
                onClick={() => postBook(slide)}
              >
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.imgUrl})`
                  }}
                ></div>
                <p  className="slider-card-title text-black">{slide.title}</p>
                {/* <p  className="slider-card-description ">
                  {slide.desc}
                </p> */}
              </div>
            );
          })}
        </div>
        <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        />
      </div>

          
    </>
  );
};
export default Books;
