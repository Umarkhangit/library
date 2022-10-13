import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
// import { useDispatch } from 'react-redux';
import { pending } from '../../redux/Action';
import moment from 'moment/moment';

const Pending = () => {

    const [penalty, setPenalty] = useState(false)
    const [borrow,setBorrowed]=useState([])
    // const dispatch=useDispatch();
    useEffect(()=>{
        axios.get("http://localhost:3001/borrowed")
        .then(res =>{
            setBorrowed(res.data)
            // dispatch(pending(res.data))
        })
        .catch(err => console.log(err))
        // runPenalty()
    },[])


    useEffect(()=>{
        runPenalty()
    })
    //PenaltyFunc

    // const callFunc = (d, index) => {
    // //   setBorrowed({...borrow,isPenalty:penalty})
    // var putState = {
    //     ...d,
    //     books : {...d.books, isPenalty : penalty}
    // }
   
    //     axios.put(`http://localhost:3001/borrowed/${d.id}`, putState).then((res) => console.log(res))
    // }

    // let dateRanges = [{empid:109,id:2,expiryDate:'2022-10-12T14:05:25.534Z'}];

    const runPenalty =() => 
    {
    borrow.map((d, index) => {
        let convertDate = moment(d.books.expiryDate).format('DD-MM-YYYY')
        let cDate = moment(convertDate);
        // console.log(cDate)
      
        let currDate = moment().format('DD-MM-YYYY');
        let currDate2 = moment(currDate)

        // let convertDate = "12-11-2022";

        // console.log(currDate2);

        // var takenDate = moment('31-01-2020', "DD-MM-YYYY");
        // var expiryDate = moment('28-02-2022', "DD-MM-YYYY")
        // var printISO = moment().toISOString()
        // console.log(takenDate)

        if(currDate2 >= cDate) {
            console.log(true)
        } else {
            console.log(false);
        }

        // if(currDate > convertDate) {
        //     setPenalty(true)
        //     callFunc(d, index)
        //     console.log("first")
            
        // } else {
        //     setPenalty(false)
        //     callFunc(d, index)

        //     console.log("second")

        // }

    
    })
}



// console.log(runPenalty())
//     let date = moment('2022-10-12T14:05:25.534Z')
//     let formate = date.format('DD-MM-YYYY')

//     let newDate = moment(formate, "DD-MM-YYYY").add(35, 'days');
//     let oldDate = newDate.format('DD-MM-YYYY')// oldDate

//     let compare1 = moment().format('DD-MM-YYYY') //cuurentDate

//     if(compare1 > oldDate) {
//          console.log("first")
//     } else{
//          console.log("second");
//     }

//     console.log('a');
    
// console.log(oldDate)

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

    
     
    <DataTable columns={columns} data={borrow} pagination highlightOnHover responsive/>

    </div>
  )
}

export default Pending