import axios from "axios";
import React,{useState,useEffect} from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const Dashboard = () => {

  const [tUser,setTUser]=useState([]);
  const [tBooks,setTBooks]=useState([]);
  const [pen,setPen]=useState([]);
  // const [avail,setAvail]=useState([]);
  // const [penalty,setPenalty]=useState([]);

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
      <div className="container" style={{ marginTop: "10%" }}>

        <div className="cards fs-3">

        <NavLink to="/admin/view" className="text-decoration-none">
          <Card style={{ width: "18rem", border: "1px solid black",height:"8rem",cursor:"pointer" }}>
            <Card.Body>
              <Card.Title><b>Total Users</b></Card.Title>

              <Card.Text style={{color:"black"}}>
                {tUser.length}              
              </Card.Text>
            </Card.Body>
          </Card>
        </NavLink>
          
          <NavLink to="/admin/allbooks" className="text-decoration-none">
            <Card style={{ width: "18rem", border: "1px solid black",cursor:"pointer"  }}>
              <Card.Body>
                <Card.Title><b>Total Books</b></Card.Title>

                <Card.Text style={{color:"black"}}>
                  {tBooks.length}             
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
        </div>

        <div className="cards mt-4 fs-3">

          <NavLink to="/admin/pending" className="text-decoration-none">
            <Card style={{ width: "18rem", border: "1px solid black",height:"8rem",cursor:"pointer"  }}>
              <Card.Body>
                <Card.Title><b>Pending</b></Card.Title>

                <Card.Text style={{color:"black"}}>
                {pen.length}            
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
          <NavLink to="/admin/available" className="text-decoration-none">
            <Card style={{ width: "18rem", border: "1px solid black",cursor:"pointer"  }}>
              <Card.Body>
                <Card.Title><b>Available</b></Card.Title>

                <Card.Text style={{color:"black"}}>
                  {available.length}                
                </Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
          
          <NavLink to="/admin/penalty" className="text-decoration-none">
            <Card style={{ width: "18rem", border: "1px solid black",cursor:"pointer"  }}>
              <Card.Body>
                <Card.Title><b>Penalty</b></Card.Title>

                <Card.Text style={{color:"black"}}>
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
