import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";

import "./Mybooks.css";

const Mybooks = () => {
  const [borrow, setBorrowed] = useState([]);
  const [filteredEmp, setFilteredEmp] = useState([]);

 

  // const dispatch=useDispatch();
  const [render, setRender] = useState(borrow.length);

  useEffect(() => {
    axios
      .get("http://localhost:3001/borrowed")
      .then((res) => {
        setBorrowed(res.data);
      })
      .catch((err) => console.log(err));
    console.log("first");
    // setRender(render + 1);

    // Rendered()
    // console.log(render)
    newEmp();
  }, [borrow.length, render]);

  //  useEffect(()=>{

  //     newEmp()

  // },[borrow.length])

  let localId = JSON.parse(localStorage.getItem("loginId"));

  let empid = localId.empid;
  // console.log(localId.empid)

  const newEmp = () => {
    setFilteredEmp(
      borrow.filter((d) => {
        return empid == d.empid;
      })
    );
  };


 
  // const curUser=userDetails.find(u =>{
  //     return empid == Number(u.empid)
  // })

  // console.log(curUser)

  // var divideBooks = filteredEmp.filter((a) =>{

  //     return a.books.isPenalty == checkBooks
  // })

  const Return = (f) => {
    axios
      .delete(`http://localhost:3001/borrowed/${f.id}`)
      .then((res) => setRender(render + 1))
      .catch((err) => console.log(err));
  };
  // let valBookss = "books";

  // const [borrow,setBorrow]=useState([])
  // // const dispatch=useDispatch();
  // useEffect(()=>{
  //     axios.get("http://localhost:3009/borrowed")
  //     .then(res =>{
  //         setBorrow(res.data)
  //         // dispatch(pending(res.data))
  //     })
  //     .catch(err => console.log(err))
  //     // runPenalty()
  // },[])

  // useEffect(()=>{
  //   runPenalty()
  // })

  // //PenaltyFunc

  // let penalty = null;

  // const callFunc = (d, index) => {
  // //   setBorrowed({...borrow,isPenalty:penalty})
  //        var putState = {
  //                       ...d,
  //                       books : {...d.books, isPenalty : penalty}
  //                       }

  //   axios.put(`http://localhost:3001/borrowed/${d.id}`, putState).then((res) => console.log(res.data))
  // }

  // const runPenalty =() =>
  // {
  // borrow.map((d, index) => {

  //   let currDate2 = moment()

  //   // console.log(currDate2);

  //   // console.log("check", moment(currDate2).isBefore(d.books.expiryDate))

  //   if(moment(currDate2).isAfter(d.books.expiryDate)) {
  //     penalty =true

  //       // console.log("trueeeee1")
  //       callFunc(d, index)
  //       // console.log('penalty',penalty)
  //       // return console.log("trueeeee2")
  //   } else {
  //     penalty =false
  //       callFunc(d, index)
  //       // console.log("falseeee1");
  //       // console.log('penalty',penalty)

  //       // return console.log("falseeee2")

  //   }

  // })
  // }

  // for penalty books
  var penaltyBooks = filteredEmp?.filter((a) => {
    return a.books.isPenalty == true;
  });

  // for reading books
  var readingBooks = filteredEmp?.filter((a) => {
    return a.books.isPenalty == false;
  });

  // console.log(penaltyBooks)

  const [reading,setReading] = useState(true)
  const [penalty,setPenalty] = useState(false)

  const read = ()=>{
    setReading(!reading)
    setPenalty(false)
  }

  const penal = ()=>{
    setPenalty(!penalty)
    setReading(false)
  }
 
  return (
    <>
      
        <div className="container mt-5">

            <div style={{margin:"0 35%"}}>
            <Button className="mx-2" onClick={read}>Reading</Button>
            <Button onClick={penal}>Penalty</Button>
            </div>

                
          
            {
              reading ?(
                <>
                 {readingBooks?.map((f) => {
                return (
                <div className="my-5">
                  <div className="wrapper-books">
                    <div className="outer-books">
                      <div className="content-books animated fadeInLeft">
                        {f.books.isPenalty ? (
                          <span className="bg-red animated fadeInDown fs-6 mb-2">
                            {" "}
                            Penalty
                          </span>
                        ) : (
                          <span className="bg-books animated fadeInDown fs-6 mb-2">
                            {" "}
                            Reading
                          </span>
                        )}
                        <h1 className="h1-books">{f.books.title}</h1>
                        <p className="p-books">
                          Expiry :{" "}
                          {moment(f?.books.expiryDate).format("DD-MM-YYYY")}
                        </p>
                        <p className="p-books">{f.books.desc}</p>
  
                        <div className="button-books">
                          <Button onClick={() => Return(f)}> Return</Button>
                        </div>
                      </div>
                      <img
                        src={f.books.imgUrl}
                        width="300px"
                        className=" img-books animated fadeInRight"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
                </>
              ):("")
            }
           

          {
            penalty?(
              <>
                {penaltyBooks?.map((f) => {
                return (
                <div className="my-5">
                  <div className="wrapper-books">
                    <div className="outer-books">
                      <div className="content-books animated fadeInLeft">
                        {f.books.isPenalty ? (
                          <span className="bg-red animated fadeInDown fs-6 mb-2">
                            {" "}
                            Penalty
                          </span>
                        ) : (
                          <span className="bg-books animated fadeInDown fs-6 mb-2">
                            {" "}
                            Reading
                          </span>
                        )}
                        <h1 className="h1-books">{f.books.title}</h1>
                        <p className="p-books">
                          Expiry :{" "}
                          {moment(f?.books.expiryDate).format("DD-MM-YYYY")}
                        </p>
                        <p className="p-books">{f.books.desc}</p>
  
                        <div className="button-books">
                          <Button onClick={() => Return(f)}> Return</Button>
                        </div>
                      </div>
                      <div>
                      <img
                        src={f.books.imgUrl}
                        width="300px"
                        className=" img-books animated fadeInRight"
                      />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
              </>
            ):("")
          }
 
        </div>
    
    </>
  );
};

export default Mybooks;
