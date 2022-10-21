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
import { Badge } from 'react-bootstrap';
import axios from 'axios';
import moment from 'moment';


const Account = () => {

    const [borrow,setBorrowed]=useState([])
    const [filteredEmp, setFilteredEmp] = useState([])
    const [userDetails, setUserDetails] = useState([])
    // const dispatch=useDispatch();
    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>{
            setBorrowed(res.data)
            
        })
        .catch(err => console.log(err))
        newEmp()
       
        
    },[])

    console.log(borrow)

  

     useEffect(()=>{
        axios.get("http://localhost:3001/user")
        .then(res =>{
             setUserDetails(res.data)
            
        })
        .catch(err => console.log(err))

        
    },[])

    let localId = JSON.parse(localStorage.getItem('loginId'));

    let empid = localId.empid;
    // console.log(localId.empid)

    const newEmp = () =>  setFilteredEmp(borrow.filter((d) => {
        
        return empid == d.empid
    })
    
    )
    
    console.log(filteredEmp);

    const curUser=userDetails.find(u =>{
        return empid == Number(u.empid)
    })

    // console.log(curUser)




    var penaltyBooks = filteredEmp.filter((a) =>{
     
        return (a.books.isPenalty == true)
    })    
    

          
    console.log(penaltyBooks);






  return (
   
        <section style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                  <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                    <a href="#">User</a>
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
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                    {/* <div className="d-flex justify-content-center mb-2">
                      <MDBBtn>Follow</MDBBtn>
                      <MDBBtn outline className="ms-1">Message</MDBBtn>
                    </div> */}
                  </MDBCardBody>
                </MDBCard>
    
                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup flush="true" className="rounded-3">
                      {/* <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="globe fa-lg text-warning" />
                        <MDBCardText className='text-dark'>https://mdbootstrap.com</MDBCardText>
                      </MDBListGroupItem> */}
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                        <MDBCardText className='text-dark'>Github link</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                        <MDBCardText className='text-dark'>Twitter Link</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                        <MDBCardText className='text-dark'>Instagram Link</MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                        <MDBCardText className='text-dark'>Facebook link</MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
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
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText className='text-dark'>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Chennai, India</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
    
                <MDBRow>
                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody >
                      <MDBCardText className="mb-4 text-dark text-center"><span className="text-primary font-italic me-1">Reading</span> </MDBCardText>

                        <div className='d-flex justify-content-between align-items-center'>

                        <MDBCardText className="mb-4 text-dark  "><span className="text-primary  font-italic m-2">Book</span></MDBCardText>
                        <MDBCardText className="mb-4 text-dark"><span className="text-primary  font-italic m-2">Expiry</span></MDBCardText>
                        </div>
                        
                        
                        
                        {filteredEmp.map((f) => {
                            return (

                                
                                <div className='d-flex justify-content-between align-items-center '>

                        
                        <MDBCardText className="mb-1 text-dark col-7" style={{ fontSize: '.77rem' }}>{f?.books.title}</MDBCardText>
                        <MDBCardText className="mb-1 text-dark" style={{ fontSize: '.77rem' }}>{moment(f?.books.expiryDate).format("DD-MM-YYYY")}</MDBCardText>

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
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      );
    }
 

export default Account