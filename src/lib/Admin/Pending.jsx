import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
// import { useDispatch } from 'react-redux';
// import { pending } from '../../redux/Action';
import moment from 'moment/moment';

const Pending = () => {

    // const [penalty, setPenalty] = useState(null)
    const [borrow,setBorrow]=useState([])
    // const dispatch=useDispatch();
    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>{
            setBorrow(res.data)
            // dispatch(pending(res.data))
        })
        .catch(err => console.log(err))
        // runPenalty()
    },[])


//     useEffect(()=>{
//         runPenalty()
//     })

//     //PenaltyFunc

//     let penalty = null;

//     const callFunc = (d, index) => {
//     //   setBorrowed({...borrow,isPenalty:penalty})
//              var putState = {
//                             ...d,
//                             books : {...d.books, isPenalty : penalty}
//                             }
   
//         axios.put(`http://localhost:3001/borrowed/${d.id}`, putState).then((res) => console.log(res.data))
//     }


//     const runPenalty =() => 
//     {
//     borrow.map((d, index) => {
       
//         let currDate2 = moment()


//         // console.log(currDate2);
       
//         // console.log("check", moment(currDate2).isBefore(d.books.expiryDate))

//         if(moment(currDate2).isAfter(d.books.expiryDate)) {
//             penalty = true
            
//             // console.log("trueeeee1")
//             callFunc(d, index)
//             // console.log('penalty',penalty)
//             // return console.log("trueeeee2")
//         } else {
//             penalty = false
//             callFunc(d, index)
//             // console.log("falseeee1");
//             // console.log('penalty',penalty)

//             // return console.log("falseeee2")
            
            
//         }
               
    
//     })
// }



    const columns=[
        {
            name:"EmpId",
            selector:row =>row.empid,
            sortable: true
        },
        {
            name:"Name",
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
    <div className='container pb-5' style={{marginTop:"7%",marginLeft:"10%"}}>

        <h1 className='text-center mb-4'>Pending</h1>

    <DataTable columns={columns} data={borrow} pagination highlightOnHover responsive/>

    </div>
  )
}

export default Pending