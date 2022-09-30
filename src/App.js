import logo from './logo.svg';
// import './App.css';
import Login, { loginCondition } from './lib/Login';
import Home from './lib/Home';
import Login from './lib/Login';
import Admin from './lib/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import UserDashboard from './lib/user/UserDashboard';
import { useEffect } from 'react';
import Books from './lib/user/Books';

import AddUser from './lib/Admin/AddUser';
import Dashboard from './lib/Admin/Dashboard';
import ViewEdit from './lib/Admin/ViewEdit';


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
      
        
         
        <Route path='/admin' element={<Admin/>}>
           <Route path='/admin/dash' element={<Dashboard/>}/>
           <Route path='/admin/add' element={<AddUser/>}/>
           <Route path='/admin/viewedit' element={<ViewEdit/>}/>
        </Route>
      </Routes>

      
    </div>
  );
}

export default App;
