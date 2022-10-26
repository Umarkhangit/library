import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
// import { BadgeRounded } from '@mui/icons-material';
// import { Badge } from 'react-bootstrap';
import axios from 'axios';
// import moment from 'moment';


const Account = () => {

  const [borrow,setBorrowed]=useState([])

    // const dispatch=useDispatch();
    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>{
            setBorrowed(res.data)
            
        })
        .catch(err => console.log(err))
       
        
    },[])

    console.log(borrow)

    // const [filteredEmp, setFilteredEmp] = useState([])


     useEffect(()=>{
        axios.get("http://localhost:3001/user")
        .then(res =>{
             setUserDetails(res.data)
            
        })
        .catch(err => console.log(err))
        // newEmp()

        
    },[])

    const [userDetails, setUserDetails] = useState([])


    let localId = JSON.parse(localStorage.getItem('loginId'));

    let empid = localId.empid;
    // console.log(localId.empid)

    // const newEmp = () =>  setFilteredEmp(borrow.filter((d) => {
        
    //     return empid == d.empid
    // })
    
    // )
    
  

    const curUser=userDetails.find(u =>{
        return empid == Number(u.empid)
    })

    // console.log(curUser)




    // var penaltyBooks = filteredEmp.filter((a) =>{
     
    //     return (a.books.isPenalty == true)
    // })    
    
    






  return (
    <div style={{ backgroundColor: '#00000' }}>
        
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                  <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                  </MDBBreadcrumbItem>
                  
                  <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>
    
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid />
                    <p className="text-muted mb-1 mt-1">{curUser?.empdesig}</p>
                    {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                    {/* <div className="d-flex justify-content-center mb-2">
                      <MDBBtn>Follow</MDBBtn>
                      <MDBBtn outline className="ms-1">Message</MDBBtn>
                    </div> */}
                  </MDBCardBody>
                </MDBCard>
    
                
              </MDBCol>

              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText className='text-dark'>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted ">{curUser?.empname}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText className='text-dark'>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{curUser?.empemail}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText className='text-dark'>Emp ID</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{curUser?.empid} </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText className='text-dark'>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    {/* <hr /> */}
                    {/* <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText className='text-dark'>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Chennai, India</MDBCardText>
                      </MDBCol>
                    </MDBRow> */}
                  </MDBCardBody>
                </MDBCard>
    
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
                    

        
                    
                
        </div>
      );
    }
 

export default Account