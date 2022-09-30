import logo from './logo.svg';
// import './App.css';
import Login, { loginCondition } from './lib/Login';
import Home from './lib/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import UserDashboard from './lib/user/UserDashboard';
import { useEffect } from 'react';
import Books from './lib/user/Books';



function App() {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate()
  // }, [loginCondition])
  return (
    <div >
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}/>
       <Route path='/home' element={<Home/>}/> 
       <Route path='/user' element={<UserDashboard/>}>  
        <Route path='/user/book' element={<Books/>} />
       </Route>
      
        
         
      </Routes>

      
    </div>
  );
}

export default App;
