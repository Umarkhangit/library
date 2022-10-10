import Login, { loginCondition } from './lib/Login';
import Admin from './lib/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import UserDashboard from './lib/user/UserDashboard';

import AddUser from './lib/Admin/AddUser';
import Dashboard from './lib/Admin/Dashboard';
import ViewUser from './lib/Admin/ViewUser';
import EditUser from './lib/Admin/EditUser';
import AllBooks from './lib/Admin/AllBooks';
import AddBooks from './lib/Admin/AddBooks';
<<<<<<< HEAD
import Cards from './lib/user/Cards';
import Books from './lib/user/Books';
=======
import EditBooks from './lib/Admin/EditBooks';
<<<<<<< HEAD
import Cards from './lib/user/Cards';
import Pending from './lib/Admin/Pending';
import Available from './lib/Admin/Available';
import Penality from './lib/Admin/Penality';
=======
>>>>>>> e35df956936cab4b80648c5615d7ab08b40ba9ad
>>>>>>> 3797a0a070174250daa4a29e172570469778e999


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
      
<<<<<<< HEAD
       <Route path='/user' element={<UserDashboard/>}/>
          
       
                    
=======
       <Route path='/user' element={<UserDashboard/>}>

       <Route path='/user/dashboard' element={<Books/>} />
       <Route path='/user/cards' element={<Cards/>} />

       </Route>
       
       
               
>>>>>>> 3797a0a070174250daa4a29e172570469778e999
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
           <Route path='/admin/penality' element={<Penality/>}/>
        </Route>

        <Route path="/assets" element={"C:\Users\ahmed\OneDrive\Documents\internal_projects\library\public\assets"} />

      </Routes>

      
    </div>
  );
}

export default App;
