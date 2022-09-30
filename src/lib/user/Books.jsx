import React, { useEffect } from "react";
import "./Books.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


let cardsData = [
  {
    id: 1,
    title: "Harry Potter",
    Author: "J.K Rowling",
    desc: "It's been nineteen years since Harry Potter by a brave new generation that's only just arrived at Hogwarts School of Witchcraft and Wizardry.",
    imgUrl: "/assets/harry.jpg",
    published : 2017,
    ISBN : 9780751565362,
  },
  {
    id: 2,
    title: "400 Days",
    Author: "Chetan Bhagat",
    desc: "Alia wouldn't stop looking, though. She wanted to know if I could help her",
    imgUrl: "/assets/400days.jpg",
    published : 2021,
    ISBN : 9781542094085,
  },
  {
    id: 3,
    title: "Will you still love me?",
    Author: "Ravinder Singh",
    desc: "There is more to love than just loving...It is also a promise Lavanya Gogoi is from the scenic hills of Shillong while Rajveer Saini belongs to the shahi city of Patiala.",
    imgUrl: "https://unsplash.it/200/200",
    published : 2018,
    ISBN : 9789387625457,
  },
  {
    id: 4,
    title: "The Second World War",
    Author: "Antony Beever",
    desc: "A magisterial, single-volume history of the greatest conflict the world has ever known by our foremost military historian.",
    imgUrl: "/assets/warlove.jpg",
    published : 2021,
    ISBN : 9780297860709,
  },
  {
    id: 5,
    title: "400 Days",
    Author: "Chetan Bhagat",
    desc: "Alia wouldn't stop looking, though. She wanted to know if I could help her",
    imgUrl: "https://unsplash.it/200/200",
    published : 2021,
    ISBN : 9781542094085,
  },
  {
    id: 6,
    title: "400 Days",
    Author: "Chetan Bhagat",
    desc: "Alia wouldn't stop looking, though. She wanted to know if I could help her",
    imgUrl: "https://unsplash.it/200/200",
    published : 2021,
    ISBN : 9781542094085,
  },
  {
    id: 7,
    title: "CARD 7",
    content: "Peter Quill",
    imgUrl: "https://unsplash.it/199/199",
  },
  {
    id: 8,
    title: "CARD 8",
    content: "Steven Rogers",
    imgUrl: "https://unsplash.it/199/200",
  },
  {
    id: 9,
    title: "CARD 9",
    content: "Bruce Banner",
    imgUrl: "https://unsplash.it/200/198",
  },
  {
    id: 10,
    title: "CARD 10",
    content: "Vincent Strange",
    imgUrl: "https://unsplash.it/198/199",
  },
];

const Books = () => {
  const [Post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://google-books.p.rapidapi.com/volumes")
      .then((response) => {
        setPost(response.data);
      });
  }, []);
  console.log(Post);

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
    navigate("/user/cards");
  };

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
          {cardsData.map((slide, index) => {
            return (
              <div
                className="slider-card text-center"
                key={index}
                onClick={() => postBook(slide)}
              >
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.imgUrl})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <p  className="slider-card-title text-black">{slide.title}</p>
                <p  className="slider-card-description ">
                  {slide.desc}
                </p>
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
