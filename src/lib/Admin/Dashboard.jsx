import axios from "axios";
import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";


const Dashboard = () => {

  const [tUser,setTUser]=useState([]);
  const [tBooks,setTBooks]=useState([]);
  const [pen,setPen]=useState([]);
 

  useEffect(() =>{
    axios.get("http://localhost:3001/user")
    .then(res =>setTUser(res.data))
    .catch(err =>console.log(err))

    axios.get("http://localhost:3001/books")
    .then(res =>setTBooks(res.data))
    .catch(err =>console.log(err))

    axios.get("http://localhost:3001/borrowed")
    .then(res =>setPen(res.data))
    .catch(err =>console.log(err))

  },[])

  // Available filter
  var available = tBooks.filter(a =>{
    return !pen.find(p =>{
        return a.ISBN === p.books.ISBN
    })
})   

//Penalty Filter

var ava = pen.filter(a =>{
     
  return a.books.isPenalty === true

})    


  // console.log(available.length);

  return (
    <>
      <div className="" style={{ marginTop: "10%", width:'100vw' }}>

        <div className="cards fs-3">


        <NavLink to="/admin/view" className="text-decoration-none" style={{color:"#00308F"}}>
          <Card style={{ width: "18vw  ", border: "none",height:"8rem",cursor:"pointer",backgroundColor:"#7CB9E8",boxShadow: "5px 5px 5px 0px rgba(201,201,201,1)" }}>
            <Card.Body style={{display:"flex",justifyContent:"space-around"}}>
              <Card.Title><b>Total Users</b></Card.Title>

              <Card.Text style={{color:"#00308F",fontSize:"55px"}}>
                {tUser.length}              
              </Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
          
          <NavLink to="/admin/allbooks" className="text-decoration-none" style={{color:"#C58A11"}}>
            <Card style={{ width: "18vw",height:"100%", border: "none",cursor:"pointer",backgroundColor:"#FFD580",boxShadow: "5px 5px 5px 0px rgba(201,201,201,1)" }}>
              <Card.Body style={{display:"flex",justifyContent:"space-around"}}>
                <Card.Title><b>Total Books</b></Card.Title>

                <Card.Text style={{color:"#C58A11",fontSize:"55px"}}>
                  {tBooks.length}             
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
        </div>

        <div className="cards mt-5 fs-3">

          <NavLink to="/admin/pending" className="text-decoration-none" style={{color:"#E03666"}}>
            <Card style={{ width: "18vw", border: "none",height:"8rem",cursor:"pointer",backgroundColor:"#F098B1",boxShadow: "5px 5px 5px 0px rgba(201,201,201,1)" }}>
              <Card.Body style={{display:"flex",justifyContent:"space-around"}}>
                <Card.Title><b>Pending</b></Card.Title>

                <Card.Text style={{color:"#E03666",fontSize:"55px"}}>
                {pen.length}            
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
          <NavLink to="/admin/available" className="text-decoration-none" style={{color:"#166EEF"}}>
            <Card style={{ width: "18vw",height:"100%", border: "none",cursor:"pointer",backgroundColor:"#A4C2EF",boxShadow: "5px 5px 5px 0px rgba(201,201,201,1)"  }}>
              <Card.Body style={{display:"flex",justifyContent:"space-around"}}>
                <Card.Title><b>Available</b></Card.Title>

                <Card.Text style={{color:"#166EEF",fontSize:"55px"}}>
                  {available.length}                
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
          <NavLink to="/admin/penalty" className="text-decoration-none" style={{color:"#099596"}}>
            <Card style={{ width: "18vw",height:"100%", border: "none",cursor:"pointer",backgroundColor:"#89E7D5",boxShadow: "5px 5px 5px 0px rgba(201,201,201,1)"  }}>
              <Card.Body style={{display:"flex",justifyContent:"space-around"}}>
                <Card.Title><b>Penalty</b></Card.Title>

                <Card.Text style={{color:"#099596",fontSize:"55px"}}>
                {ava.length} 
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
        </div>

      </div>
    </>
  );
};

export default Dashboard;
