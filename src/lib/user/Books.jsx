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
    imgUrl: "/assets/love.jpg",
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
    title: "Ponniyin Selvi 4",
    Author: "Kalki",
    desc: "It's the calm before the storm.  Will all three succeed in their quests? Will Arulmozhi Varmar recover from his ague? Will Aniruddhar's schemes and stratagems save the royal family? Will Azhwarkkadiyaan's efforts bear fruit? And lastly ... will Chozha Nadu be free of the tangled web of conspiracies?",
    imgUrl: "/assets/ps4.jpg",
    published : 2021,
    ISBN : 9788194973416,
  },
  {
    id: 6,
    title: "Hidden",
    Author: "Catherine McKenzie",
    desc: "After Jeff Manning suddenly dies, two women who loved him—his wife, Claire, and his co-worker, Tish, are both sent reeling and must figure out how to cope in this new novel from the author of Forgotten.",
    imgUrl: "/assets/hidden.jpg",
    published : 2014,
    ISBN : 9780544264456,
  },
  {
    id: 7,
    title: "Peter Pan",
    Author: "Catherine McKenzie",
    desc: "All children grow up. All except one.” That special child is Peter Pan, and since making his debut on the stage in 1904, this eternal youth has carried boys and girls off to magical, marvelous Neverland.",
    imgUrl: "/assets/peterpan.jpg",
    published : 2009,
    ISBN : 97805442622437,
  },
  {
    id: 8,
    title: "Road to React",
    Author: "Robin Weirch",
    desc: "In 'The Road to React' you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature.",
    imgUrl: "/assets/react.png",
    published : 2014,
    ISBN : 9780544264977,
  },
  {
    id: 9,
    title: "Alice in Wonderland",
    Author: "Lewis Carroll",
    desc: "One normal summer day, Alice is sitting on the riverbank when a big, white, talking rabbit runs past. He pops into a big rabbit hole, and Alice follows him down, down, down into a strange and magical land.",
    imgUrl: "/assets/alice.jpg",
    published : 2002,
    ISBN : 9780544264977,
  },
  {
    id: 10,
    title: "Javascript & Jquery",
    Author: "Jon Duckett",
    desc: "A visual and accessible guide to JavaScript and jQuery in a built-to-last hardcover edition In JavaScript & jQuery renowned author Jon Duckett discards the traditional programming book template and approaches writing code in a more relevant, less intimidating way.",
    imgUrl: "/assets/js.png",
    published : 2014,
    ISBN : 9780544264977,
  },
];

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
