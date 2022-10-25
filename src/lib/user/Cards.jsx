import React, { useEffect, useState } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cards.css";
// import "./Hover.css";
import moment from "moment";
import { toast } from "react-toastify";

function Cards() {
  const vacation = useLocation();
  console.log(vacation);

  const [chnBtn,setChnBtn]=useState(false)
  const [borrowed,setBorrowed]=useState([])


  let currDate = moment();

  let newDate = moment().add(1, 'days');
  // let nDate = moment(currDate, "DD-MM-YYYY").add(-20, 'days');
 
  const [user,setUser]=useState([])
  
  // local storage
  let localId = JSON.parse(localStorage.getItem('loginId'));

  let empid = localId.empid;
  console.log(empid);
  useEffect(()=>{
    axios.get("http://localhost:3001/user")
    .then(res =>{
      let filtered = res.data.find(val =>val.empid == empid)
      setUser(filtered)
    })
  },[])
// console.log(user)

  

const navigate =useNavigate()
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
   
    setChnBtn(true)
    navigate(-1)
  };

  // For changing borrow button
  useEffect(()=>{
    axios.get("http://localhost:3001/borrowed")
    .then(res =>setBorrowed(res.data)).catch(err =>console.log(err))
  },[chnBtn])
  // console.log(borrowed)

  let fborrow = borrowed.find(val =>{
    return empid == val.empid && vacation.state.ISBN == val.books.ISBN
  })
  console.log(fborrow);

  // if(fborrow?.empid == empid && fborrow.books.ISBN == vacation.state.ISBN){
  //   console.log("true")
  // }

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
    <div className="body mt-5">
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
           
           {
            fborrow?.empid == empid && fborrow.books.ISBN == vacation.state.ISBN ?
            (<div >
            <button type="button" class="btn btn-primary" disabled>In use</button>
             </div>):(
               <div  onClick={() => postBorrow(vacation.state)}>
                  <button type="button" class="btn btn-primary">Borrow</button>
               </div>
              )
           }
            
               
            
           

          </div>
        </div>
      </div>
    </div>


</>

  );
}

export default Cards;
