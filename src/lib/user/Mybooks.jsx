import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'


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




    var penaltyBooks = filteredEmp.filter((a) =>{
     
        return (a.books.isPenalty == true)
    })    


    const Return = (f) => {

        axios.delete(`http://localhost:3001/borrowed/${f.id}`).then((res)=> setRender(render + 1))
        .catch((err)  => console.log(err))
       
        
       
         

    }
    

  return (
    <>
<div className='container mt-5'>
    
<MDBRow>
                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody >
                      <MDBCardText className="mb-4 text-dark text-center"><span className="text-primary font-italic me-1">Reading</span> </MDBCardText>

                        <div className='d-flex justify-content-between align-items-center'>

                        <MDBCardText className="mb-4 text-dark  "><span className="text-primary  font-italic m-2">Book</span></MDBCardText>
                        <MDBCardText className="mb-4 text-dark"><span className="text-primary  font-italic m-2">Expiry</span></MDBCardText>
                        <MDBCardText className="mb-4 text-dark"><span className="text-primary  font-italic m-2"> Action</span></MDBCardText>
                        
                        </div>
                        
                        
                        
                        {filteredEmp.map((f) => {
                            return (

                                
                                <div key={f.id} className='d-flex justify-content-between align-items-center '>

                        
                        <MDBCardText className="mb-1 text-dark col-2" style={{ fontSize: '.77rem' }}>{f?.books.title}</MDBCardText>
                        <MDBCardText className="mb-1 text-dark" style={{ fontSize: '.77rem' }}>{moment(f?.books.expiryDate).format("DD-MM-YYYY")}</MDBCardText>
                        <MDBBtn className='text-center mb-2' onClick={()=> Return(f)}>Return</MDBBtn>

                        </div>
                                    )
                        
                            
                        })}  
    
                       </MDBCardBody>
                    </MDBCard>
                  </MDBCol>


                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody >
                      <MDBCardText  className="mb-4 text-dark text-center"><span className="text-primary font-italic me-1">Penalty</span> </MDBCardText>

                        {/* <div className='d-flex justify-content-between align-items-center'>

                        <MDBCardText className="mb-4 text-dark  "><span className="text-primary  font-italic m-2">Book</span></MDBCardText>
                        <MDBCardText className="mb-4 text-dark"><span className="text-primary  font-italic m-2">Expiry</span></MDBCardText>
                        </div> */}
                        <div className='d-flex=column justify-content-between align-items-center '>

                        {penaltyBooks.map((f) => {
                            return <MDBCardText className="mb-1 text-dark text-wrap" style={{ fontSize: '.89rem' }}> <Badge pill className='p-2 text-wrap' >{f?.books.title}</Badge></MDBCardText>
                        })}
                        
                        
                        {/* <MDBCardText className="mb-1 text-dark" style={{ fontSize: '.77rem' }}>23-02-2025</MDBCardText> */}

                        </div>
    
                       </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  </MDBRow>


                  <div>
                    
                  </div>
    
</div>
    </>
  )
}

export default Mybooks