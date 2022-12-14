import Login from './lib/Login';
import Admin from './lib/Admin/Admin';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
// import { useEffect } from 'react';


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
// import Books from './lib/user/Books';
import Account from './lib/user/Account';
import Feed from './lib/user/Dashboard';
// import Account2 from './lib/user/Account2';

import Mybooks from './lib/user/Mybooks';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRoutes from './ProtectedRoutes';






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
      <Route element={<ProtectedRoute/>}>
               <Route path='/user' element={<UserDashboard/>}>
        {/* <ProtectedRoute exact path='/user/dashboard' element={<Books/>} /> */}
        {/* <Route path='/user/dashboard' element={<Books/>} /> */}
        <Route path='/user/cards' element={<Cards/>} />
        <Route path='/user/Account' element={<Account/>} />
        <Route path='/user/mybooks' element={<Mybooks/>} />
        {/* <Route path='/user/account2' element={<Account2/>}/> */}

        <Route path='/user/feed' element={<Feed/>} />
       </Route>
       </Route>

      
       
       
      {/* admin routes */}
      <Route element={<ProtectedRoutes/>}>
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
        </Route>

        {/* <Route path="/assets" element={"C:\Users\ahmed\OneDrive\Documents\internal_projects\library\public\assets"} /> */}

      </Routes>

      
    </div>
  );
}

export default App;
