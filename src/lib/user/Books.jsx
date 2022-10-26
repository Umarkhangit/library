import React, { useEffect } from "react";
import "./Books.css";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AllBooks } from "../../redux/Action";
import moment from "moment";

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import { Navigation } from "swiper";
import "swiper/css/navigation";





const Books = () => {
  
  const [allbooks,setAllbooks]=useState([]);
  const [borrow, setBorrowed] = useState([]);

   
  const Allbooks=useSelector(state =>state)
  console.log(Allbooks)


  const [Gen, setGenre] = useState("Romance")

  // const slideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };



  const dispatch=useDispatch()


  useEffect(()=>{
    axios.get("http://localhost:3001/books")
    .then(res =>{
      setAllbooks(res.data)
        dispatch(AllBooks(res.data))

    })
    .catch(err =>console.log(err))

    
  },[])


  useEffect(()=>{
      axios.get("http://localhost:3001/borrowed")
      .then(res =>{
        setBorrowed(res.data)
          
  
      })
      .catch(err =>console.log(err))
  
      
    },[])


  useEffect(()=>{
    runPenalty() 
  })
  
  //PenaltyFunc
  
  let penalty = null;
  
  const callFunc = (d, index) => {
  //   setBorrowed({...borrow,isPenalty:penalty})
         var putState = {
                        ...d,
                        books : {...d.books, isPenalty : penalty}
                        }
  
    axios.put(`http://localhost:3001/borrowed/${d.id}`, putState).then((res) => console.log(res.data))
  }
  
  
  const runPenalty =() => 
  {
  borrow.map((d, index) => {
   
    let currDate2 = moment()
  
  
    // console.log(currDate2);
   
    // console.log("check", moment(currDate2).isBefore(d.books.expiryDate))
  
    if(moment(currDate2).isAfter(d.books.expiryDate)) {
      penalty =true
        
        // console.log("trueeeee1")
        callFunc(d, index)
        // console.log('penalty',penalty)
        // return console.log("trueeeee2")
    } else {
      penalty =false
        callFunc(d, index)
        // console.log("falseeee1");
        // console.log('penalty',penalty)
  
        // return console.log("falseeee2")
        
        
    }
           
  
  })
  }

  // for penalty books
 



  

  let genreBooks = allbooks?.filter(a =>{
     console.log(a.genre == "Thriller")
     console.log({Gen})
    return (a.genre == Gen)
      
  }
  )    

// console.log(genreBooks)
// console.log(penaltyBooks)

  // const slideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  const navigate = useNavigate();

  const postBook = (data) => {

    navigate("/user/cards", {state: data});
  };

 

  // console.log(allbooks)

  
    
 

  const changeGenre = (s) => {
    setGenre(s)
  }
    


  return (
    <> 
      <div className="text-center pb-2 mt-5">
        <h2>All Books</h2>
      </div>

      
             
  
      <Swiper
            freeMode = {true}
            grabCursor = {true}
            modules = {[FreeMode, Navigation]}
            className="mySwiper"
            slidesPerView = {4}
            spacesBetween = {10}
            navigation={true}
            breakpoints = {{
              0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
               },
               1280: {
                slidesPerView: 4,
                spaceBetween: 10,
                   },


            }}
            
            
            >
                 


          {allbooks?.map((slide, index) => {
            return (
              
              <SwiperSlide>
             
              
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
              
              </div>


                        </SwiperSlide>
              
         

            );
          })}
                      </Swiper>

        
          

      <div className="text-center pb-2 mt-5">
        <h2>Genre</h2>
        <div className="d-flex justify-content-center gap-5">
          <p className="text-dark ">Filter by :</p>
          <Button  onClick={() => changeGenre("Romance")}>
           Love
          </Button>
            
  
          <Button  onClick={() => changeGenre("Thriller")}>
            Thriller
          </Button>
          <Button onClick={() => changeGenre("War")}>
            War
          </Button>
          <Button onClick={() => changeGenre("Mythology")}>
            Mythology
          </Button>
        </div>
      </div>
      
      
      <Swiper
            freeMode = {true}
            grabCursor = {true}
            modules = {[FreeMode, Navigation]}
            className="mySwiper"
            slidesPerView = {4}
            spacesBetween = {10}
            navigation={true}
            breakpoints = {{
              0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
               },
               1280: {
                slidesPerView: 4,
                spaceBetween: 10,
                   },


            }}
            
            
            >
                 


          {penaltyBooks?.map((slide, index) => {
            return (
              
              <SwiperSlide>
             
              
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
              
              </div>


                        </SwiperSlide>
              
         

            );
          })}
                      </Swiper>
      
 
          
    </>
  );
        }
export default Books;



