import React, { useEffect, useState } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import { useLocation } from "react-router-dom";
import "./Cards.css";
// import "./Hover.css";
import moment from "moment";
import { toast } from "react-toastify";

function Cards() {
  const vacation = useLocation();
  console.log(vacation);

  // let cardsData = [
  //   {
  //     id: 1,
  //     title: "Harry Potter",
  //     Author: "J.K Rowling",
  //     desc: "It's been nineteen years since Harry Potter by a brave new generation that's only just arrived at Hogwarts School of Witchcraft and Wizardry.",
  //     imgUrl: "/assets/harry.jpg",
  //     genre : "Mythology",
  //     published: 2017,
  //     ISBN: 9780751565362,
  //   },
  //   {
  //     id: 2,
  //     title: "400 Days",
  //     Author: "Chetan Bhagat",
  //     desc: "Alia wouldn't stop looking, though. She wanted to know if I could help her",
  //     imgUrl: "/assets/400days.jpg",
  //     genre : "Thriller",
  //     published: 2021,
  //     ISBN: 9781542094085,
  //   },
  //   {
  //     id: 3,
  //     title: "Will you still love me?",
  //     Author: "Ravinder Singh",
  //     desc: "There is more to love than just loving...It is also a promise Lavanya Gogoi is from the scenic hills of Shillong while Rajveer Saini belongs to the shahi city of Patiala.",
  //     imgUrl: "/assets/love.jpg",
  //     genre : "Romance",
  //     published: 2018,
  //     ISBN: 9789387625457,
  //   },
  //   {
  //     id: 4,
  //     title: "The Second World War",
  //     Author: "Antony Beever",
  //     desc: "A magisterial, single-volume history of the greatest conflict the world has ever known by our foremost military historian.",
  //     imgUrl: "/assets/warlove.jpg",
  //     genre : "War",
  //     published: 2021,
  //     ISBN: 9780297860709,
  //   },
  //   {
  //     id: 5,
  //     title: "Ponniyin Selvi 4",
  //     Author: "Kalki",
  //     desc: "It's the calm before the storm.  Will all three succeed in their quests? Will Arulmozhi Varmar recover from his ague? Will Aniruddhar's schemes and stratagems save the royal family? Will Azhwarkkadiyaan's efforts bear fruit? And lastly ... will Chozha Nadu be free of the tangled web of conspiracies?",
  //     imgUrl: "/assets/ps4.jpg",
  //     genre : "Tamil History",
  //     published: 2021,
  //     ISBN: 9788194973416,
  //   },
  //   {
  //     id: 6,
  //     title: "Hidden",
  //     Author: "Catherine McKenzie",
  //     desc: "After Jeff Manning suddenly dies, two women who loved him—his wife, Claire, and his co-worker, Tish, are both sent reeling and must figure out how to cope in this new novel from the author of Forgotten.",
  //     imgUrl: "/assets/hidden.jpg",
  //     genre : "Thriller",
  //     published: 2014,
  //     ISBN: 9780544264456,
  //   },
  //   {
  //     id: 7,
  //     title: "Peter Pan",
  //     Author: "Catherine McKenzie",
  //     desc: "All children grow up. All except one.” That special child is Peter Pan, and since making his debut on the stage in 1904, this eternal youth has carried boys and girls off to magical, marvelous Neverland.",
  //     imgUrl: "/assets/peterpan.jpg",
  //     genre : "Fiction",
  //     published: 2009,
  //     ISBN: 97805442622437,
  //   },
  //   {
  //     id: 8,
  //     title: "Road to React",
  //     Author: "Robin Weirch",
  //     desc: "In 'The Road to React' you will learn about all the fundamentals of React.js with Hooks while building a full-blown React application step by step. While you create the React application, every chapter will introduce you to a new React key feature.",
  //     imgUrl: "/assets/react.png",
  //     genre : "Programming",
  //     published: 2014,
  //     ISBN: 9780544264977,
  //   },
  //   {
  //     id: 9,
  //     title: "Alice in Wonderland",
  //     Author: "Lewis Carroll",
  //     desc: "One normal summer day, Alice is sitting on the riverbank when a big, white, talking rabbit runs past. He pops into a big rabbit hole, and Alice follows him down, down, down into a strange and magical land.",
  //     imgUrl: "/assets/alice.jpg",
  //     genre : "Fiction",
  //     published: 2002,
  //     ISBN: 9780544264977,
  //   },
  //   {
  //     id: 10,
  //     title: "Javascript & Jquery",
  //     Author: "Jon Duckett",
  //     desc: "A visual and accessible guide to JavaScript and jQuery in a built-to-last hardcover edition In JavaScript & jQuery renowned author Jon Duckett discards the traditional programming book template and approaches writing code in a more relevant, less intimidating way.",
  //     imgUrl: "/assets/js.png",
  //     genre : "Programming",
  //     published: 2014,
  //     ISBN: 9780544264977,
  //   },
  // ];


  let currDate = moment();

  let newDate = moment().add(-1, 'days');
  // let nDate = moment(currDate, "DD-MM-YYYY").add(-20, 'days');
 
  const [user,setUser]=useState([])
  // local storage
  let localId = JSON.parse(localStorage.getItem('loginId'));

  let empid = localId.empid;

  useEffect(()=>{
    axios.get("http://localhost:3001/user")
    .then(res =>{
      let filtered = res.data.find(val =>val.empid == empid)
      setUser(filtered)
    })
  },[])
console.log(user)

  const postBorrow = (isbn) => {
    const borrow = {
      empid: user.empid,
      empname: user.empname,
      books: {
        ...isbn,
        isPending: true,
        takenDate : currDate,
        expiryDate : newDate
      },
    };

    console.log(borrow);

    axios.post("http://localhost:3001/borrowed",borrow).then((res) => console.log(res)).catch((err) => console.log(err))
    toast.success("Borrowed")
  };

  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={vacation.state.imgUrl} />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="list-group-flush">
    //     <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //     <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //     <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
    <>
    <div className="body">
      <div className="cover">
        <div className="book">
          <img id="image" alt="bookcover" src={vacation.state.imgUrl} />
          <div id="page_layout" className="text-center">
            <p className="page_title mt-5">{vacation.state.title}</p>
            <p className="page_author">{vacation.state.Author}</p>
            <p className="page_blockquote mt-5">{vacation.state.desc}</p>
            <div className="footer d-flex justify-content-around mt-5">
              <p className="page_id mt-5">ISBN : {vacation.state.ISBN}</p>
              <p className="page_year mt-5">{vacation.state.published}</p>
            </div>
            
            <div  onClick={() => postBorrow(vacation.state)}>
            <button type="button" class="btn btn-primary">Borrow</button>



</div>
          </div>
        </div>
      </div>
    </div>


</>

  );
}

export default Cards;
