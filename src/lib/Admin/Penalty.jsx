import axios from 'axios';
import React,{useState,useEffect} from 'react'

import DataTable from 'react-data-table-component';

const Penalty = () => {

  // const [penalty, setPenalty] = useState(null);

  const [borrow,setBorrowed]=useState([])
//   const [penaltyData, setPenaltyData] = useState([]);
    // const dispatch=useDispatch();

    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>{
            setBorrowed(res.data)
            // dispatch(pending(res.data))
        })
        .catch(err => console.log(err))
       
    },[])

    var penaltyBooks = borrow.filter(a =>{
     
          return (a.books.isPenalty === true)
            
            
      
  })    

  

  //Datatable for Penalty Users list with books  
  
  const columns=[
    {
        name:"EmpId",
        selector:row =>row.empid,
        sortable: true
    },
    {
        name:"EmpName",
        selector:row =>row.empname,
        sortable: true
    },
    {
        name:"Book ISBN",
        selector:row =>row.books.ISBN,
        sortable: true
    },
    {
        name:"Book Title",
        selector:row =>row.books.title,
        sortable: true
    },
    {
        name:"Book Cover",
        cell:(row) =><img src={row.books.imgUrl} style={{width:50}} alt="book cover"/>
    },
]
  
  return (
    <div className='container pb-5' style={{marginTop:"7%",marginLeft:"21%"}}>

    
     
    <DataTable columns={columns} data={penaltyBooks} pagination highlightOnHover responsive/>

    </div>
  )
}

export default Penalty