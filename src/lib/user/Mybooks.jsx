import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap'

import "./Mybooks.css";


const Mybooks = () => {

    const [borrow,setBorrowed]=useState([])
    const [filteredEmp, setFilteredEmp] = useState([])
    // const [userDetails, setUserDetails] = useState([])
    // let rend = false;
    // const dispatch=useDispatch();
    const [render, setRender] = useState(borrow.length);

   
    
    
    useEffect(()=>{
      axios.get("http://localhost:3001/borrowed")
        .then(res =>{
          setBorrowed(res.data)
          
        })
        .catch(err => console.log(err)) 
        console.log("first")
        // setRender(render + 1);
        
        // Rendered()
        // console.log(render)
        newEmp()
      },[borrow.length,render]) 

     
      
      
     

    //  useEffect(()=>{
        
    //     newEmp()  
   
        
    // },[borrow.length])
 
      

    let localId = JSON.parse(localStorage.getItem('loginId'));

    let empid = localId.empid;
    // console.log(localId.empid)

    const newEmp = () =>  {setFilteredEmp(borrow.filter((d) => {
        
        return empid == d.empid
    })
    )
    
  }
    
  

    // const curUser=userDetails.find(u =>{
    //     return empid == Number(u.empid)
    // })

    // console.log(curUser)
  



    // var divideBooks = filteredEmp.filter((a) =>{
     
    //     return a.books.isPenalty == checkBooks
    // })    

   

    const Return = (f) => {

        axios.delete(`http://localhost:3001/borrowed/${f.id}`).then((res)=> setRender(render + 1))
        .catch((err)  => console.log(err))
       
        
       
         

    }
    // let valBookss = "books";

  return (
    <>
<div className='container mt-5'>
    




                    {filteredEmp.map((f) =>  {
                      return (
                        <div className='my-5'>
<div className="wrapper-books">
                        
                        <div className="outer-books">
		<div className="content-books animated fadeInLeft">
    {f.books.isPenalty ?  <span className="bg-red animated fadeInDown fs-6 mb-2"> Penalty</span> :  <span className="bg-books animated fadeInDown fs-6 mb-2"> Reading</span>  }  
			<h1 className='h1-books'>{f.books.title}</h1>
      <p className='p-books'>Expiry : {" "}{moment(f?.books.expiryDate).format("DD-MM-YYYY")}</p>
			<p className='p-books'>{f.books.desc}</p>
			
			<div className="button-books">
				<Button onClick={()=> Return(f)}> Return</Button>
			</div>
			
		</div>
		<img src={f.books.imgUrl} width="300px" className=" img-books animated fadeInRight"/>
	</div>
</div>

                  </div>
                      )
                    })}
	

    

                







</div>
    </>
  )
}

export default Mybooks