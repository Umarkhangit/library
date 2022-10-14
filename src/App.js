import Login, { loginCondition } from './lib/Login';
import Admin from './lib/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';


import AddUser from './lib/Admin/AddUser';
import Dashboard from './lib/Admin/Dashboard';
import ViewUser from './lib/Admin/ViewUser';
import EditUser from './lib/Admin/EditUser';
import AllBooks from './lib/Admin/AllBooks';
import AddBooks from './lib/Admin/AddBooks';
import EditBooks from './lib/Admin/EditBooks';
import Pending from './lib/Admin/Pending';
import Available from './lib/Admin/Available';
import Penalty from './lib/Admin/Penalty';

import UserDashboard from './lib/user/UserDashboard';
import Cards from './lib/user/Cards';
import Books from './lib/user/Books';






function App() {
  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate()
  // }, [loginCondition])
  return (
    <div>
      <ToastContainer/>
      <Routes>

        <Route path='/' element={<Login/>}/>
      

    {/* user routes */}
       <Route path='/user' element={<UserDashboard/>}>
        <Route path='/user/dashboard' element={<Books/>} />
        <Route path='/user/cards' element={<Cards/>} />
       </Route>
       
       
      {/* admin routes */}
        <Route path='/admin' element={<Admin/>}>
           <Route path='/admin/dash' element={<Dashboard/>}/>
           <Route path='/admin/add' element={<AddUser/>}/>
           <Route path='/admin/view' element={<ViewUser/>}/>
           <Route path='/admin/edit' element={<EditUser/>}/>
           <Route path='/admin/allbooks' element={<AllBooks/>}/>
           <Route path='/admin/addbooks' element={<AddBooks/>}/>
           <Route path='/admin/editbooks' element={<EditBooks/>}/>
           <Route path='/admin/pending' element={<Pending/>}/>
           <Route path='/admin/available' element={<Available/>}/>
           <Route path='/admin/penalty' element={<Penalty/>}/>
        </Route>

        <Route path="/assets" element={"C:\Users\ahmed\OneDrive\Documents\internal_projects\library\public\assets"} />

      </Routes>

      
    </div>
  );
}

export default App;
