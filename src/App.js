import Login, { loginCondition } from './lib/Login';
import Admin from './lib/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import UserDashboard from './lib/user/UserDashboard';
import { useEffect } from 'react';

import AddUser from './lib/Admin/AddUser';
import Dashboard from './lib/Admin/Dashboard';
import View from './lib/Admin/View';
import Edit from './lib/Admin/Edit';
import AllBooks from './lib/Admin/AllBooks';
import AddBooks from './lib/Admin/AddBooks';


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
      
       <Route path='/user' element={<UserDashboard/>}/>  
       
      
               
        <Route path='/admin' element={<Admin/>}>
           <Route path='/admin/dash' element={<Dashboard/>}/>
           <Route path='/admin/add' element={<AddUser/>}/>
           <Route path='/admin/view' element={<View/>}/>
           <Route path='/admin/edit' element={<Edit/>}/>
           <Route path='/admin/allbooks' element={<AllBooks/>}/>
           <Route path='/admin/addbooks' element={<AddBooks/>}/>
        </Route>

      </Routes>

      
    </div>
  );
}

export default App;
