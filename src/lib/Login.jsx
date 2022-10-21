import React, { useEffect, useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import axios from "axios";

export var loginCondition = false;

function App() {
  const [cred, setCred] = useState([]);
  const [credUser,setCredUser]=useState([]);
  const [invalid,setInvalid]=useState(false)
  

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin")
      .then(res => {
        setCred(res.data)
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

 useEffect(()=>{
  axios.get("http://localhost:3001/user")
  .then(res=> setCredUser(res.data))
  .catch(err =>console.log(err))
 },[])

  // const vali = useSelector((state) => state);
  // console.log(vali);

  //react-hook-fom
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);

    const checkEmail=cred.find(val =>val.email===data.email)

    const checkUserEmail=credUser.find(val =>val.empemail===data.email)
    
    console.log(checkEmail);

    let passJson = {
      isLogged : true,
      empid : checkUserEmail?.empid
    }

     if(checkEmail?.email===data.email && checkEmail?.password===data.password ){
      
      navigate("/admin/dash")
      localStorage.setItem('isLogged', true )
     }
     else if(checkUserEmail?.empemail===data.email && checkUserEmail?.emppassword===data.password){
      navigate("/user/dashboard")
      localStorage.setItem('loginId', JSON.stringify(passJson))

     }
     else{
      
      // setInvalid(true)
      toast.error("Invalid Credentials",{autoClose:2000})
      
     }
    console.log(invalid)
  };

  return (
    <div className="background">
      <div className="login-box">
        <div className="container login">
          <div class="row app-des">
            <div class="col left-background ">
              <h2>L.M.S</h2>
              <p>By Ideassion Technology Solutions</p>
            </div>

            <div class="col login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="font-weight-bold mb-4">Login</h2>
                <Form.Group>
                  <Form.Label className="font-weight-bold mb-2">
                    Email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="mb-3"
                    style={{borderColor:invalid?"red":""}}
                    name="email"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{3,3}/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p style={{ color: "red", fontSize: 17 }}>
                      {errors.email.message}
                    </p>
                  )}

                  <Form.Label className="font-weight-bold mb-2">
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className="mb-3"
                    style={{borderColor:invalid?"red":""}}
                    name="password"
                    {...register("password", {
                      required: "password is required",
                      //   pattern: {
                      //     value: /^[A-Za-z]\w{7,14}$/,
                      //     message: "atleat 8 characters",
                      //   },
                    })}
                  />
                  {errors.password && (
                    <p style={{ color: "red", fontSize: 17 }}>
                      {errors.password.message}
                    </p>
                  )}
                </Form.Group>
                <Button className="mt-3 btnn" type="submit">
                  Login to your account
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
